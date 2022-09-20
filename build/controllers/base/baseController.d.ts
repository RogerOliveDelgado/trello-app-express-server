import { Model } from "mongoose";
import { NextFunction, Response } from "express";
import AuthRequest from '../../middleware/authenticate';
declare const create: <T>(model: Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const update: <T>(model: Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
export { create, update };
