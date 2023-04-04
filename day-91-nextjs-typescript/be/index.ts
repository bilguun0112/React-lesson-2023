console.log("Day - 91 - nextJS");
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import theaterRouter from "./routes/theaters.api";
import moviesRouter from "./routes/movies.api";
import commentRouter from "./routes/comment.api";
import cors from "cors";

const app: Express = express();

const PORT = process.env.PORT || 8080;
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://blackbilguun:TEozn8OuZBEU4XQF@bilguunee.rn8hbjv.mongodb.net/sample_mflix";

let name: string = `<h1 style="text-align: center">Day - 90 - Express typescript</h1>,<title>Crazy day started</title>`;
let phoneNumber: Number = 99119911;
let isMarried: boolean = false;
// let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheeps: string[] = ["sheep1", "sheep2", "sheep3"];
let sheepObject: { name: string; age: Number } = {
  name: "sheep1",
  age: 1,
};

interface Student {
  name: string;
  age: number;
  isMarried: boolean;
}

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(name);
});
app.use("/theater", theaterRouter);
app.use("/movies", moviesRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
