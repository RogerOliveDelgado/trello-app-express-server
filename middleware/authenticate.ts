import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload, decode } from "jsonwebtoken";
import { nextTick } from "process";
import config from "../config/config";

export default interface AuthRequest extends Request {
  user: string | JwtPayload;
}

const autheticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"];

  if (!authorization) return res.status(401).send({ ok: false });

  const token = authorization.split(" ")[1];

  verify(token, config.app.PRIVATE_KEY, (error, decodeToken) => {
    if (error) return res.status(401).send({ ok: false });
    if (decodeToken !== null) {
      req.user = decodeToken;
      next();
    }
  });
};

export { autheticate };
