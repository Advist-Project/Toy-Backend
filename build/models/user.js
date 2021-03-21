"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
const userSchema = new mongoose_1.Schema({
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
});
userSchema.pre('save', function (next) {
    var user = this;
    // password인 경우에만 바꾼다
    if (user.isModified('password')) {
        // typescript는 String을 string이라고 타입지정
        bcrypt_1.default.genSalt(saltRounds, (err, salt) => {
            if (err)
                return next(err);
            bcrypt_1.default.hash(user.password, salt, (err, hash) => {
                if (err)
                    return next(err);
                user.password = hash;
                next();
            });
        });
    }
    else {
        next();
    }
});
//  사용자 정의 메서드(스키마, 다큐먼트) -> 비번 비교 함수
userSchema.methods.comparePassword = function (plainPassword, cb) {
    // 해쉬로 암호화된 코드와 password와 비교
    bcrypt_1.default.compare(plainPassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};
// 토큰을 부여
userSchema.methods.generateToken = function (cb) {
    const user = this;
    // 첫번째 인자에는 payload, 두번째 인자에는 비밀키(secret)
    const token = jsonwebtoken_1.default.sign(user._id.toHexString(), 'secret');
    // 토큰 만료 시간 : 하루?
    const oneDay = String(moment_1.default().add(1, 'hour').valueOf());
    // 에러가 나지 않았다면 그대로user에 넣기
    user.tokenExp = oneDay;
    user.token = token;
    user.save(function (err, user) {
        if (err)
            return cb(err);
        cb(null, user);
    });
};
// 모델이나 쿼리에 직접 사용자 정의 메서드
userSchema.statics.findByToken = function (token, cb) {
    const user = this;
    // 토큰화 된 부분을 다시 디코드 해서 평범한 비번으로 만든다
    // 그후 아이디와 비번이 같은 것을 보내라.?
    jsonwebtoken_1.default.verify(token, 'secret', function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err)
                return cb(err);
            cb(null, user);
        });
    });
};
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map