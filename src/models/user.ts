import moongoose, { Model, Schema } from 'mongoose'
import User from '../interfaces/user'
import bcrypt from 'bcrypt'
const saltRounds = 10
import jwt from 'jsonwebtoken'
import moment from 'moment'
import user from '../controllers/user'

const userSchema : Schema = new Schema({
    name: {
        type: String,
        maxlength: 50
    },
    password: {
        type: String,
        minlength: 1
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})
userSchema.pre<User>('save', function (next) {

    var user = this
// password인 경우에만 바꾼다
    if (user.isModified('password')) {
        // typescript는 String을 string이라고 타입지정
        bcrypt.genSalt(saltRounds, (err: Error, salt:string) => {
            if (err) return next(err)
            
            bcrypt.hash(user.password, salt, (err:Error, hash: string) => {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

//  사용자 정의 메서드(스키마, 다큐먼트) -> 비번 비교 함수
userSchema.methods.comparePassword= function(this: User, plainPassword : string, cb){
    // 해쉬로 암호화된 코드와 password와 비교
     bcrypt.compare(plainPassword, this.password, (err:Error, isMatch:boolean) => {
        cb(err, isMatch)
    })
}
// 토큰을 부여
userSchema.methods.generateToken = function(this:User, cb) {
    const user = this;
    // 첫번째 인자에는 payload, 두번째 인자에는 비밀키(secret)
    const token =  jwt.sign(user._id.toHexString(),'secret')
    // 토큰 만료 시간 : 하루?
    const oneDay = String(moment().add(1, 'hour').valueOf());
// 에러가 나지 않았다면 그대로user에 넣기
    user.tokenExp = oneDay;
    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}
// 모델이나 쿼리에 직접 사용자 정의 메서드
userSchema.statics.findByToken = function (token, cb) {
    const user = this;
// 토큰화 된 부분을 다시 디코드 해서 평범한 비번으로 만든다
// 그후 아이디와 비번이 같은 것을 보내라.?
    jwt.verify(token,'secret',function(err:Error, decode:any){
        user.findOne({"_id":decode, "token":token}, function(err:Error, user:any){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

const User = moongoose.model<User>('User',userSchema)

export default User;