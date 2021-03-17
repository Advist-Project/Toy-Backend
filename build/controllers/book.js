"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../models/book"));
const bookDetail_1 = __importDefault(require("../models/bookDetail"));
const bookComment_1 = __importDefault(require("../models/bookComment"));
const getBook = (req, res, next) => {
    book_1.default.find()
        .exec()
        .then(results => {
        // 200-> 성공 했다면
        return res.status(200).json({
            books: results
        });
    })
        .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message: error.message,
            error
        });
    });
};
const getBookDetail = (req, res, next) => {
    bookDetail_1.default.findOne({ seq: parseInt(req.params.seq) })
        .exec()
        .then(results => {
        // 200-> 성공 했다면
        return res.status(200).json({
            detail: results
        });
    })
        .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message: error.message,
            error
        });
    });
};
const getBookComment = (req, res, next) => {
    bookComment_1.default.find({ seq: parseInt(req.params.seq) })
        .exec()
        .then(results => {
        // 200-> 성공 했다면
        return res.status(200).json({
            comments: results
        });
    })
        .catch((error) => {
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message: error.message,
            error
        });
    });
};
exports.default = { getBook, getBookDetail, getBookComment };
//# sourceMappingURL=book.js.map