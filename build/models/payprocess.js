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
//{ name : "구매자", email : "test1234@advist.co.kr"}
const payprocessSchema = new mongoose_1.Schema({
    // required : 꼭 입력해야 한다.
    name: { type: String, required: true },
    email: { type: String, required: true }
});
// interface 형식이 pay-process를 pay-process스키마에 넣는다(정의는 위에 pay-processSchema)
exports.default = mongoose_1.default.model('payprocess', payprocessSchema);
//# sourceMappingURL=payprocess.js.map