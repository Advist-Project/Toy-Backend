import {Document} from 'mongoose';

export default interface Detail extends Document {
    seq : Number,
    title : string, 
    price : Number,
    description : string,
    fileForm : string,
    owner : string,
    ownerIcon : string,
    bookImg : string
}