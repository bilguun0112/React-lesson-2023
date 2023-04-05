import { Router } from "express";
import {
  getTheaters,
  getTheaterById,
  searchTheaters,
} from "../controllers/theaterController";

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);
theaterRouter.get("/byId/:id", getTheaterById);
theaterRouter.get("/search", searchTheaters);

export default theaterRouter;
