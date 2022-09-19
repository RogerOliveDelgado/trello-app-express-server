import { Request, Response, NextFunction } from "express-serve-static-core";
declare const getUserBoards: (_req: Request, res: Response, _next: NextFunction) => Promise<void>;
declare const createBoard: (req: Request, res: Response, _next: NextFunction) => Promise<void>;
export { createBoard, getUserBoards };
