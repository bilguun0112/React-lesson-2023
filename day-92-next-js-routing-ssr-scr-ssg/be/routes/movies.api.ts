import { Router } from "express";
import { getMovies, getMoviesById } from "../controllers/moviesController";
const moviesRouter = Router();

moviesRouter.get("/list", getMovies);
moviesRouter.get("/byId/:id", getMoviesById);

export default moviesRouter;
