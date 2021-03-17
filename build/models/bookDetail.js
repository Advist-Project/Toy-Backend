"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
//{ date : "2020131", title : "test2", imgList : "", content : "�ƾ�2" } 
const detailSchema = new mongoose_1.Schema({
    // required : �� �Է��ؾ� �Ѵ�. 
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileForm: { type: String, required: true },
    owner: { type: String, required: true },
    ownerIcon: { type: String, required: true }
});
// interface ������ Diary�� Diary��Ű���� �ִ´�(���Ǵ� ���� diarySchema) 
exports.default = mongoose_1.default.model('Detail', detailSchema);
//# sourceMappingURL=bookDetail.js.map