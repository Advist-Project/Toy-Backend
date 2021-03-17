import mongoose, { Schema } from 'mongoose';
import Comment from '../interfaces/bookComment';


//{ date : "2020131", title : "test2", imgList : "", content : "아아2" } 
const commentSchema : Schema = new Schema( {
    // required : 꼭 입력해야 한다. 
    seq : {type : Number, required : true}, 
    score : {type : Number, required : true}, 
    userId : {type : String, required : true},
    content : {type : String, required : true}
},{
    timestamps : true
});



// interface 형식이 Diary를 Diary스키마에 넣는다(정의는 위에 diarySchema) 
export default mongoose.model<Comment>('Comment', commentSchema);
