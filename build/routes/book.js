"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../controllers/book"));
const router = express_1.default.Router();
router.get('/', book_1.default.getBook);
router.get('/details/:seq', book_1.default.getBookDetail);
router.get('/comments/:seq', book_1.default.getBookComment);
module.exports = router;
//# sourceMappingURL=book.js.map