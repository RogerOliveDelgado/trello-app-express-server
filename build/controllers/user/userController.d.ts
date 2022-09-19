import { Request, Response, NextFunction } from "express";
declare const signInUser: (req: Request, _res: Response, _next: NextFunction) => Promise<void>;
declare const signUpUser: (_req: Request, _res: Response, _next: NextFunction) => Promise<void>;
export { signInUser, signUpUser };
