import { Model } from "mongoose";
import { NextFunction, Request, Response } from "express";
import AuthRequest from '../../middleware/authenticate';
declare const create: <T>(model: Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const read: <T>(model: Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const readAll: <T>(model: Model<T, {}, {}, {}, any>) => (_req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const update: <T>(model: Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const remove: <T>(model: Model<T, {}, {}, {}, any>) => (req: Request, res: Response, _next: NextFunction) => Promise<void>;
export { create, read, update, remove, readAll };
