import { create, read, update, remove, readAll } from '../../controllers/base/baseController'
import { Router } from "express";
import BoardModel from '../../models/Boards/BoardModel';
import { autheticate } from '../../middleware/authenticate';

const boardRouter = Router();

boardRouter.use(autheticate);

boardRouter.post('', create(BoardModel))
boardRouter.get('/:id', read(BoardModel))
boardRouter.post('/:id', update(BoardModel))
boardRouter.delete('/:id', remove(BoardModel))
boardRouter.get('', readAll(BoardModel))

export { boardRouter };
