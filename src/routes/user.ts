import express from "express";
import controller from "../controllers/user";

const router = express.Router();

router.post('/register', controller.registUser);
router.post('/login', controller.loginUser);
router.post('/logout', controller.logoutUser);


export = router;