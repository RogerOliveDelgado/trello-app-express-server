import { Router } from "express";
import {create, read, update, remove, readAll} from '../../controllers/base/baseController'
import TaskModel from '../../models/Tasks/TasksModel';

const taskRouter = Router();

taskRouter.post('', create(TaskModel))
taskRouter.get('/:id', read(TaskModel))
taskRouter.post('/:id', update(TaskModel))
taskRouter.delete('/:id', remove(TaskModel))
taskRouter.get('', readAll(TaskModel))

export{taskRouter}