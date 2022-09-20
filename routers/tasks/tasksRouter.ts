import { Router } from "express";
import { createUserTask, getUserTasks } from "../../controllers/tasks/tasksController";

const taskRouter = Router();

// taskRouter.get('/getUserTasks',getUserTasks);
taskRouter.post('', createUserTask)

export{taskRouter}