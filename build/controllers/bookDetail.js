"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookDetail_1 = __importDefault(require("../models/bookDetail"));
const getBookDetail = (req, res, next) => {
    bookDetail_1.default.findOne({ title: req.params.title })
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
exports.default = { getBookDetail };
//# sourceMappingURL=bookDetail.js.map