import {Document} from 'mongoose';

export default interface Detail extends Document {
    seq : Number,
    title : String, 
    description : String,
    fileForm : String,
    owner : String,
    ownerIcon : String
}