import {Document} from 'mongoose';

export default interface Detail extends Document {
    seq : Number,
    title : String, 
    price : Number,
    description : String,
    fileForm : String,
    owner : String,
    ownerIcon : String
}