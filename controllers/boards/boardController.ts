import { Request, Response, NextFunction } from "express-serve-static-core"
import BoardModel from '../../models/Boards/BoardModel'
import db from '../../models/index'

const getUserBoards = async (_req:Request, _res: Response, _next: NextFunction) => {

}

export {getUserBoards}