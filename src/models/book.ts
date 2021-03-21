import mongoose, { Schema } from 'mongoose';
import Book from '../interfaces/book';



//{ date : "2020131", title : "test2", imgList : "", content : "아아2" } 
const bookSchema : Schema = new Schema( {
    // required : 꼭 입력해야 한다. 
    seq : {type : Number, required : true},
    bookTitle : {type : String, required : true}, 
    desc : {type : String, required : true},
    price : {type : Number, required : true},
    bookImg : {type : String, required : true}
});


// interface 형식이 Diary를 Diary스키마에 넣는다(정의는 위에 diarySchema) -> books
export default mongoose.model<Book>('Book', bookSchema);
