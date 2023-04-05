"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controllers/commentController");
const commentRouter = (0, express_1.Router)();
commentRouter.get("/list", commentController_1.getComment);
commentRouter.get("/byId/:id", commentController_1.getcommentById);
exports.default = commentRouter;
