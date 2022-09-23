import { NextFunction } from 'express';
import { Schema, model, SchemaTypes} from 'mongoose'
import UserModel from '../Users/UsersModel';
import ITask from './Tasks.interface';

const TaskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    employees: [{
        type: SchemaTypes.ObjectId,
        ref: "User",
        default: []
    }],
    initDate: {
        type: Date,
        required: [true, "initDate required"]
    },
    endDate: {
        type: Date,
        required: [true, "endDate required"]
    },
    board: {
        type: SchemaTypes.ObjectId,
        ref: "Board",
        required: [true, "BoardID required"]
    },
    state: {
        type: String,
        required: [true, "Task state required"]
    },
    tags: [{
        type: String,
    }]
})

TaskSchema.pre("save", async function(next:NextFunction){

    const user = await UserModel.findById({_id:this.employees}).lean().exec();
    
    user.tasks.push(this);

    UserModel.findByIdAndUpdate({_id:user._id},{$set:{tasks: user.tasks}},{new:true}).lean().exec()

    next();
})

TaskSchema.pre("find", function(next:NextFunction){
    this.populate("employees",{firstName:1, lastName:1, tasks:0})
    next();
})
TaskSchema.pre("findOne", function(next:NextFunction){
    this.populate("employees",{firstName:1, lastName:1, tasks:0})
    next();
})
const TaskModel = model<ITask>("Task", TaskSchema)

export default TaskModel