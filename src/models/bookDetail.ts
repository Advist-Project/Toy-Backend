import mongoose, { Schema } from 'mongoose';
import Detail from '../interfaces/bookDetail';


//{ date : "2020131", title : "test2", imgList : "", content : "아아2" } 
const detailSchema : Schema = new Schema( {
    // required : 꼭 입력해야 한다. 
    seq : {type : Number, required : true}, 
    title : {type : String, required : true}, 
    price : {type : Number, required : true},
    description : {type : String, required : true},
    fileForm : {type : String, required : true},
    owner : {type : String, required : true},
    ownerIcon : {type : String, required : true}
});



// interface 형식이 Diary를 Diary스키마에 넣는다(정의는 위에 diarySchema) 
export default mongoose.model<Detail>('Detail', detailSchema);
