import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
interface AuthRequest extends Request {
    user: string | JwtPayload;
}
declare const autheticate: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export { autheticate };
