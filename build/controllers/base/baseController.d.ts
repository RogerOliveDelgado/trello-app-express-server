/// <reference types="mongoose/types/models" />
import { Model } from "mongoose";
import { NextFunction, Response } from "express";
import AuthRequest from "../../middleware/authenticate";
declare const create: <T>(model: Model<T, {}, {}, {}, any>) => ({ body }: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const read: <T>(model: Model<T, {}, {}, {}, any>) => ({ params: { id } }: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const readAll: <T>(model: Model<T, {}, {}, {}, any>) => ({ query }: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const update: <T>(model: Model<T, {}, {}, {}, any>) => ({ params: { id }, body }: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const remove: <T>(model: Model<T, {}, {}, {}, any>) => ({ params: { id } }: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
export { create, read, update, remove, readAll };
