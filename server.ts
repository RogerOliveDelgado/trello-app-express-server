import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from 'helmet'
import morgan from 'morgan'
import db from './models/index'

dotenv.config()

const app: Express = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json())

// app.post("/board", async ( )=> {
//     // res.send("")
// //   const name = req.body.name
// //   const newBoard = await db.Board.create({name: name})
// //   res.status(200).send(`User ${newBoard} was added to database to`)
// })
app.get("/", () => {
  console.log("Buenos días amigo")
})

export default app
