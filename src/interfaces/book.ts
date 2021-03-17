import {Document} from 'mongoose';

export default interface Book extends Document {
    seq : Number,
    bookTitle : String, 
    desc : String,
    price : Number,
    bookImg : String
}