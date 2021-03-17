import {Document} from 'mongoose';

export default interface Detail extends Document {
    title : String, 
    description : String,
    fileForm : String,
    owner : String,
    ownerIcon : String
}