"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const index_1 = tslib_1.__importDefault(require("./models/index"));
const userRouter_1 = require("./routers/users/userRouter");
const boardRouter_1 = require("./routers/boards/boardRouter");
const tasksRouter_1 = require("./routers/tasks/tasksRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
//Routers
app.use(userRouter_1.userRouter);
app.use(boardRouter_1.boardRouter);
app.use(tasksRouter_1.tasksRouter);
app.post("/board", async (req, res) => {
    const name = req.body.name;
    const newBoard = await index_1.default.Board.create({ name: name });
    res.status(200).send(`User ${newBoard} was added to database to`);
});
app.get("/", (_req, res) => {
    res.status(200).send("Buenos días amigo");
});
exports.default = app;
//# sourceMappingURL=server.js.map