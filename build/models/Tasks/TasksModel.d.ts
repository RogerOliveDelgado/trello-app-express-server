import { Model } from "mongoose";
import ITask from "./Tasks.interface";
declare const TaskModel: Model<ITask, {}, {}, {}, any>;
export default TaskModel;
