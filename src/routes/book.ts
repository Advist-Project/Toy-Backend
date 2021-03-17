import express from "express";
import controller from "../controllers/book";

const router = express.Router();

router.get('/', controller.getBook);
router.get('/details/:seq', controller.getBookDetail);
router.get('/comments/:seq', controller.getBookComment);

export = router;