import {Document} from 'mongoose';

export default interface Comment extends Document {
    seq : Number,
    score : Number, 
    userId : string,
    content : string
}