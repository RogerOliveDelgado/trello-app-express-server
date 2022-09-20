import { Router } from "express";
import { createUserTask, deleteUserTask, getUserTasks, updateUserTask } from "../../controllers/tasks/tasksController";

const taskRouter = Router();

// taskRouter.get('/getUserTasks',getUserTasks);
taskRouter.post('', createUserTask)
taskRouter.post('/update', updateUserTask)
taskRouter.post('/deleteTask', deleteUserTask)

export{taskRouter}