"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
// app.post("/board", async ( )=> {
//     // res.send("")
// //   const name = req.body.name
// //   const newBoard = await db.Board.create({name: name})
// //   res.status(200).send(`User ${newBoard} was added to database to`)
// })
app.get("/", () => {
    console.log("Buenos días amigo");
});
exports.default = app;
//# sourceMappingURL=server.js.map