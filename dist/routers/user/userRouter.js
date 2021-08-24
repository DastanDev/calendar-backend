"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createUser_1 = __importDefault(require("../../controllers/user/createUser"));
var getAllUsers_1 = __importDefault(require("../../controllers/user/getAllUsers"));
var getUserDetails_1 = __importDefault(require("../../controllers/user/getUserDetails"));
var loginUser_1 = __importDefault(require("../../controllers/user/loginUser"));
var updateUser_1 = __importDefault(require("../../controllers/user/updateUser"));
var adminAuth_1 = __importDefault(require("../../middleware/adminAuth"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var userRouter = express_1.default.Router();
// /user
userRouter.post("/login", loginUser_1.default);
userRouter.post("/register", createUser_1.default);
userRouter.put("/update", auth_1.default, updateUser_1.default);
userRouter.get("/getAll", getAllUsers_1.default);
userRouter.get("/my/profile", auth_1.default, adminAuth_1.default, getUserDetails_1.default);
exports.default = userRouter;
