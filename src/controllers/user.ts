import {NextFunction, Request, Response} from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const registUser = (req : Request, res : Response, next : NextFunction) => {
    const user = new User(req.body);
    return user.save()
    .then(result => {
        // 200-> 성공시
        return res.status(201).json({
            // success에 true를 담아줘
            success : true
        });
    })
    .catch((error) => {
        // 500-> 실패 했다면
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    }) 
}
// 로그아웃
const logoutUser = (req : Request, res : Response, next : NextFunction) => {
    User.findOneAndUpdate({ _id: req.body._id }, { token: "", tokenExp: "" })
    .exec()
    .then(results =>{
        // 200-> 성공 했다면
        return res.status(200).json({
            results : "logout"
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
// 로그인
const loginUser = (req : Request, res : Response, next : NextFunction) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            })
// 비밀번호 비교
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" })
// 비밀번호가 맞을 경우 토큰 부여하라
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err)
                // 쿠키 생성 -(쿠키이름, 쿠키내용)
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    })
            })
        })
    })
}

export default {registUser, loginUser, logoutUser}
