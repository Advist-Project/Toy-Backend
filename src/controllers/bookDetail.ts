import {NextFunction, Request, Response} from 'express'
import Detail from '../models/bookDetail'
import mongoose from 'mongoose'

const getBookDetail = (req : Request, res : Response, next : NextFunction) => {
    Detail.findOne({title : req.params.title})
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

export default {getBookDetail}

