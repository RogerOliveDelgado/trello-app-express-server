import { Request, Response, NextFunction } from "express-serve-static-core";
declare const getUserBoards: (_req: Request, _res: Response, _next: NextFunction) => Promise<void>;
export { getUserBoards };
