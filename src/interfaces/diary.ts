import {Document} from 'mongoose';

export default interface Diary extends Document {
    title : string, 
    content : string,
    extraInformation : string
}