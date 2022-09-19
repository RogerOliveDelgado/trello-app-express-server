import { Router } from "express";
import { getUserTasks } from "../../controllers/tasks/tasksController";

const tasksRouter = Router();

tasksRouter.get('/getUserTasks', getUserTasks);

export{tasksRouter}