"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user"));
const router = express_1.default.Router();
router.post('/register', user_1.default.registUser);
router.post('/login', user_1.default.loginUser);
router.post('/logout', user_1.default.logoutUser);
module.exports = router;
//# sourceMappingURL=user.js.map