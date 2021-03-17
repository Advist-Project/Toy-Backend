import {Document} from 'mongoose';

export default interface Comment extends Document {
    seq : Number,
    score : Number, 
    userId : String,
    content : String
}