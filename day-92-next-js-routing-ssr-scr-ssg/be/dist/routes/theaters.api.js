"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const theaterController_1 = require("../controllers/theaterController");
const theaterRouter = (0, express_1.Router)();
theaterRouter.get("/list", theaterController_1.getTheaters);
theaterRouter.get("/byId/:id", theaterController_1.getTheaterById);
theaterRouter.get("/search", theaterController_1.searchTheaters);
exports.default = theaterRouter;
