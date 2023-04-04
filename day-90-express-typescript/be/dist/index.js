"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Day - 90 - Express typescript");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const theaters_api_1 = __importDefault(require("./routes/theaters.api"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING ||
    "mongodb+srv://blackbilguun:TEozn8OuZBEU4XQF@bilguunee.rn8hbjv.mongodb.net/sample_mflix";
let name = `<h1 style="text-align: center">Day - 90 - Express typescript</h1>,<title>Crazy day started</title>`;
let phoneNumber = 99119911;
let isMarried = false;
// let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheeps = ["sheep1", "sheep2", "sheep3"];
let sheepObject = {
    name: "sheep1",
    age: 1,
};
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send(name);
});
app.use("/theater", theaters_api_1.default);
app.listen(PORT, () => {
    mongoose_1.default
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error));
    console.log(`Application is running on http://localhost:${PORT}`);
});
