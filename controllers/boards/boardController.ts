import { Request, Response, NextFunction } from "express-serve-static-core"
import BoardModel from '../../models/Boards/BoardModel'
import db from '../../models/index'

const getUserBoards = async (_req:Request, res: Response, _next: NextFunction) => {
  const board = await BoardModel.find({}).lean().exec();//Devuelve los boards creados
  // const board = await db.Board.find({}).lean().exec();


  console.log(board);
  res.status(200).send(board);
}

const createBoard = async (req:Request, res: Response, _next: NextFunction) => {
  const {name} = req.body;
  const newBoard = await BoardModel.create({name:name})

  res.status(200).send(newBoard);
}

export {createBoard,getUserBoards}