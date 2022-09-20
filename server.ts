import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {
  authRouter,
  boardRouter,
  taskRouter,
  userRouter,
} from "./routers/index";

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

//Routers
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/board", boardRouter);
app.use("/task", taskRouter);
app.use("/", (_req, res) => {
  res.send("TrelloApp Server")
})

export default app;
