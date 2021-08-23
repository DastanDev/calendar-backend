"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var db = mysql2_1.default.createConnection({
    host: (_a = process.env) === null || _a === void 0 ? void 0 : _a.DB_HOST,
    user: (_b = process.env) === null || _b === void 0 ? void 0 : _b.DB_USER,
    password: (_c = process.env) === null || _c === void 0 ? void 0 : _c.DB_PASSWORD,
    database: (_d = process.env) === null || _d === void 0 ? void 0 : _d.DB,
});
exports.default = db;
