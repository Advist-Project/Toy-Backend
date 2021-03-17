import express from "express";
import controller from "../controllers/bookDetail";

const router = express.Router();

router.get('/details/:title', controller.getBookDetail);

export = router;