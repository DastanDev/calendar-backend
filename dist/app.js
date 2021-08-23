"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var connectDb_1 = __importDefault(require("./config/connectDb"));
var colors_1 = __importDefault(require("colors"));
var app = express_1.default();
connectDb_1.default.connect(function (err) {
    if (err)
        return console.error(colors_1.default.red(err.message));
    console.log(colors_1.default.blue("Database Connected"));
});
app.get("/", function (req, res) {
    res.send("good");
});
var PORT = 5000 !== null && 5000 !== void 0 ? 5000 : process.env.PORT;
app.listen(PORT, function () { return console.log("Listening on http://localhost:" + PORT); });
