"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const bookDetail_1 = __importDefault(require("../controllers/bookDetail"));
const router = express_1.default.Router();
router.get('/details/:title', bookDetail_1.default.getBookDetail);
module.exports = router;
//# sourceMappingURL=bookDetail.js.map