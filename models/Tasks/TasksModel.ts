import { Schema, model, SchemaTypes} from 'mongoose'
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

const TaskModel = model<ITask>("Task", TaskSchema)

export default TaskModel