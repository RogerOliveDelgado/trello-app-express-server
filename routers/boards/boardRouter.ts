import { Router } from "express";
import {
  createBoard,
  getUserBoards,
} from "../../controllers/boards/boardController";
import { autheticate } from "../../middleware/authenticate";

const boardRouter = Router();

// boardRouter.get('/userBoards', getUserBoards);
boardRouter.get("", autheticate, (_req: any, res: any) => {
  res.send();
});
// boardRouter.post('/createBoard', createBoard);
boardRouter.post("", (_req: any, res: any) => {
  console.log("esto es un post");
  res.send();
});

export { boardRouter };
