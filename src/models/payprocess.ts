import mongoose, { Schema } from 'mongoose';
import Payprocess from '../interfaces/payprocess';



//{ name : "구매자", email : "test1234@advist.co.kr"}
const payprocessSchema : Schema = new Schema( {
    // required : 꼭 입력해야 한다.
   name : {type : String, required : true},
   email : {type : String, required : true}
});


// interface 형식이 pay-process를 pay-process스키마에 넣는다(정의는 위에 pay-processSchema)
export default mongoose.model<Payprocess>('payprocess', payprocessSchema);
