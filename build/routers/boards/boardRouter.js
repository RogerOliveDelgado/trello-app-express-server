"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../../middleware/authenticate");
const boardRouter = (0, express_1.Router)();
exports.boardRouter = boardRouter;
// boardRouter.get('/userBoards', getUserBoards);
boardRouter.get("", authenticate_1.autheticate, (_req, res) => {
    res.send();
});
// boardRouter.post('/createBoard', createBoard);
boardRouter.post("", (_req, res) => {
    console.log("esto es un post");
    res.send();
});
//# sourceMappingURL=boardRouter.js.map