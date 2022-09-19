"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = require("express");
const boardController_1 = require("../../controllers/boards/boardController");
const boardRouter = (0, express_1.Router)();
exports.boardRouter = boardRouter;
boardRouter.get('/userBoards', boardController_1.getUserBoards);
boardRouter.post('/createBoard', boardController_1.createBoard);
//# sourceMappingURL=boardRouter.js.map