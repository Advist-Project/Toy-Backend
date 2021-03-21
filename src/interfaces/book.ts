import {Document} from 'mongoose';

export default interface Book extends Document {
    seq : Number,
    bookTitle : string, 
    desc : string,
    price : Number,
    bookImg : string
}