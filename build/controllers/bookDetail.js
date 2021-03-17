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
        // 200-> ���� �ߴٸ�
        return res.status(200).json({
            detail: results
        });
    })
        .catch((error) => {
        return res.status(500).json({
            // message�� ���� �޼����� �־ ������
            message: error.message,
            error
        });
    });
};
exports.default = { getBookDetail };
//# sourceMappingURL=bookDetail.js.map