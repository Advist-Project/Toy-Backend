import {Document} from 'mongoose';

export default interface User extends Document{
    name: string,
    password: string,
    email: string,
    lastname: string,
    role: string,
    image: string,
    token: string,
    tokenExp: string
}