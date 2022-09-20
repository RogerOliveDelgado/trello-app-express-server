import { Router } from "express";
import { getUserTasks } from "../../controllers/tasks/tasksController";

const taskRouter = Router();

taskRouter.get('/getUserTasks',getUserTasks);

export{taskRouter}