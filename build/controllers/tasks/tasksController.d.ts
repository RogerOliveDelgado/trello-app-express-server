import { Request, Response, NextFunction } from "express";
declare const createUserTask: (req: Request, res: Response, _next: NextFunction) => Promise<void>;
declare const getUserTasks: (_req: Request, _res: Response, _next: NextFunction) => Promise<void>;
export { getUserTasks, createUserTask };
