import { Request, Response, NextFunction } from "express";
declare const getUserTasks: (_req: Request, _res: Response, _next: NextFunction) => Promise<void>;
export { getUserTasks };
