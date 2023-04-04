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
exports.searchTheaters = exports.getTheaterById = exports.getTheaters = void 0;
const theathers_model_1 = __importDefault(require("../models/theathers.model"));
const getTheaters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theaters = yield theathers_model_1.default.find();
        res.status(200).json(theaters);
    }
    catch (error) {
        res.status(404).json({ data: "dahin azaa uzeerei" });
    }
});
exports.getTheaters = getTheaters;
const getTheaterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theaters = yield theathers_model_1.default.find({
            theaterId: Number(req.params.id),
        });
        res.status(200).json(theaters);
    }
    catch (error) {
        res.status(404).json({ data: [] });
    }
});
exports.getTheaterById = getTheaterById;
const searchTheaters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = String(req.query.keyword);
    try {
        const theater = yield theathers_model_1.default.find({
            $or: [
                { "location.address.city": keyword },
                { "location.address.steet1": keyword },
                { "location.address.state": keyword },
            ],
        });
        res.status(200).json(theater);
    }
    catch (error) {
        res.status(404).json({ data: [] });
    }
});
exports.searchTheaters = searchTheaters;
