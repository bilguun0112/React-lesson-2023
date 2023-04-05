import CommentModel from "../models/comment.model";
import { Request, Response } from "express";

export const getComment = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const commentPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const comment = await CommentModel.find()
      .limit(commentPerPage)
      .skip(commentPerPage * page);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ data: "dahin azaa uzeerei" });
  }
};

export const getcommentById = async (req: Request, res: Response) => {
  try {
    const comment = await CommentModel.find({
      _id: Number(req.params.id),
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
