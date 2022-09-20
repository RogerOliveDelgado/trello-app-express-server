import { Request, Response, NextFunction } from "express";
import TaskModel from '../../models/Tasks/TasksModel';
import ITask from '../../models/Tasks/Tasks.interface';

const createUserTask = async (req: Request, res: Response, _next: NextFunction) => {
    const { title, description, employees, initDate, endDate, boardRefID, state, tags } = req.body as ITask
    try {
        const task = await TaskModel.create({
            title,
            description,
            initDate,
            endDate,
            boardRefID,
            state,
        }) 

        res.status(200).send({ok: true, data: task})
        
    } catch (error) {
        res.send({ok:false, msg: 'Task cannot be created'})
    }
}

const getUserTasks = async (_req: Request, _res: Response, _next: NextFunction) => {

}

const updateUserTask = async (_req: Request, _res: Response, _next: NextFunction) => {

}

const deleteUserTask = async (_req: Request, _res: Response, _next: NextFunction) => {

}

export { getUserTasks, createUserTask }