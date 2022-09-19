import { Router } from "express";
import { createBoard, getUserBoards } from "../../controllers/boards/boardController";

const boardRouter = Router();

boardRouter.get('/userBoards', getUserBoards);
boardRouter.post('/createBoard', createBoard);


export{boardRouter}