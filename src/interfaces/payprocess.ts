import {Document} from 'mongoose';

export default interface Payprocess extends Document {
     name: string,
     email: string
}
