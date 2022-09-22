import mongoose, { Model } from "mongoose";
import { NextFunction, Request, Response } from "express";
import AuthRequest from "../../middleware/authenticate";
declare const create: <T>(model: mongoose.Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<Response<any, Record<string, any>>>;
declare const read: <T>(model: mongoose.Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const readAll: <T>(model: mongoose.Model<T, {}, {}, {}, any>) => (_req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const update: <T>(model: mongoose.Model<T, {}, {}, {}, any>) => (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const remove: <T>(model: mongoose.Model<T, {}, {}, {}, any>) => (req: Request, res: Response, _next: NextFunction) => Promise<void>;
export { create, read, update, remove, readAll };
