"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getcommentById = exports.getComment = void 0;
const comment_model_1 = __importDefault(require("../models/comment.model"));
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 0;
    const commentPerPage = Number(req.query.moviesPerPage) || 5;
    try {
        const comment = yield comment_model_1.default.find()
            .limit(commentPerPage)
            .skip(commentPerPage * page);
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(404).json({ data: "dahin azaa uzeerei" });
    }
});
exports.getComment = getComment;
const getcommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield comment_model_1.default.find({
            _id: Number(req.params.id),
        });
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(404).json({ data: [] });
    }
});
exports.getcommentById = getcommentById;
