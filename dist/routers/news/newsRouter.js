"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createNews_1 = __importDefault(require("../../controllers/news/createNews"));
var deleteNews_1 = __importDefault(require("../../controllers/news/deleteNews"));
var getAllNews_1 = __importDefault(require("../../controllers/news/getAllNews"));
var getOneNews_1 = __importDefault(require("../../controllers/news/getOneNews"));
var updateNews_1 = __importDefault(require("../../controllers/news/updateNews"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var newsRouter = express_1.Router();
// /api/news
newsRouter.get("/get", getAllNews_1.default);
newsRouter.get("/get/:id", getOneNews_1.default);
newsRouter.delete("/delete/:id", deleteNews_1.default);
newsRouter.post("/create", auth_1.default, createNews_1.default);
newsRouter.put("/update/:id", auth_1.default, updateNews_1.default);
exports.default = newsRouter;
