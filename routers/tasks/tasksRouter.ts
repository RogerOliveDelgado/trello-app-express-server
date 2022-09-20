import { Router } from "express";
import { createUserTask, deleteUserTask, getUserTasks, updateUserTask } from "../../controllers/tasks/tasksController";
import {update} from '../../controllers/base/baseController'
import TaskModel from '../../models/Tasks/TasksModel';

const taskRouter = Router();

// taskRouter.get('/getUserTasks',getUserTasks);
taskRouter.post('', createUserTask)
taskRouter.post('/:taskId', update(TaskModel))
// taskRouter.post('/deleteTask', deleteUserTask)

export{taskRouter}