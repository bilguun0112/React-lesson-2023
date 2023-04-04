import { Router } from "express";
import { getComment, getcommentById } from "../controllers/commentController";
const commentRouter = Router();

commentRouter.get("/list", getComment);
commentRouter.get("/byId/:id", getcommentById);

export default commentRouter;
