"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBoards = exports.createBoard = void 0;
const tslib_1 = require("tslib");
const BoardModel_1 = tslib_1.__importDefault(require("../../models/Boards/BoardModel"));
const getUserBoards = async (_req, res, _next) => {
    const board = await BoardModel_1.default.find({}).lean().exec(); //Devuelve los boards creados
    // const board = await db.Board.find({}).lean().exec();
    console.log(board);
    res.status(200).send(board);
};
exports.getUserBoards = getUserBoards;
const createBoard = async (req, res, _next) => {
    const { name } = req.body;
    const newBoard = await BoardModel_1.default.create({ name: name });
    res.status(200).send(newBoard);
};
exports.createBoard = createBoard;
//# sourceMappingURL=boardController.js.map