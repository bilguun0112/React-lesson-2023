"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const moviesRouter = (0, express_1.Router)();
moviesRouter.get("/list", moviesController_1.getMovies);
moviesRouter.get("/byId/:id", moviesController_1.getMoviesById);
exports.default = moviesRouter;
