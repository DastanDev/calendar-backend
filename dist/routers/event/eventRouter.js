"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createEvent_1 = __importDefault(require("../../controllers/event/createEvent"));
var deleteEvent_1 = __importDefault(require("../../controllers/event/deleteEvent"));
var getAllEvents_1 = __importDefault(require("../../controllers/event/getAllEvents"));
var getOneEvent_1 = __importDefault(require("../../controllers/event/getOneEvent"));
var updateEvent_1 = __importDefault(require("../../controllers/event/updateEvent"));
var eventRouter = express_1.Router();
// /event
eventRouter.get("/getAll", getAllEvents_1.default);
eventRouter.get("/:id", getOneEvent_1.default);
eventRouter.delete("/:id", deleteEvent_1.default);
eventRouter.post("/create", createEvent_1.default);
eventRouter.put("/update/:id", updateEvent_1.default);
exports.default = eventRouter;
