import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from 'helmet'
import morgan from 'morgan'
import db from './models/index'
import {userRouter} from './routers/users/userRouter'
import {boardRouter} from './routers/boards/boardRouter'
import {tasksRouter} from './routers/tasks/tasksRouter'

dotenv.config()

const app: Express = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json())

//Routers
app.use(userRouter);
app.use(boardRouter);
app.use(tasksRouter);

app.post("/board", async (req:Request, res:Response )=> {
  const name = req.body.name
  const newBoard = await db.Board.create({name: name})
  res.status(200).send(`User ${newBoard} was added to database to`)
})

app.get("/", (_req:Request, res:Response) => {
  res.status(200).send("Buenos días amigo")
})

export default app
