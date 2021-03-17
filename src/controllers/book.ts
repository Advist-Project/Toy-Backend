import {NextFunction, Request, Response} from 'express'
import Book from '../models/book'
import Detail from '../models/bookDetail'
import Comment from '../models/bookComment'
import mongoose from 'mongoose'

const getBook = (req : Request, res : Response, next : NextFunction) => {
    Book.find()
    .exec()
    .then(results =>{
        // 200-> 성공 했다면
        return res.status(200).json({
            books : results
        });
    })
    .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    })
}

const getBookDetail = (req : Request, res : Response, next : NextFunction) => {
    Detail.findOne({seq : parseInt(req.params.seq)})
    .exec()
    .then(results =>{
        // 200-> 성공 했다면
        return res.status(200).json({
            detail : results
        });
    })
    .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    })
}

const getBookComment = (req : Request, res : Response, next : NextFunction) => {
    Comment.find({seq : parseInt(req.params.seq)})
    .exec()
    .then(results =>{
        // 200-> 성공 했다면
        return res.status(200).json({
            comments : results
        });
    })
    .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    })
}

export default {getBook, getBookDetail, getBookComment}
