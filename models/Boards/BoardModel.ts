import { NextFunction } from 'express';
import { Schema, model, SchemaTypes} from 'mongoose'
import IBoard from './Board.interface';

const BoardSchema = new Schema<IBoard>({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    initDate: {
        type: Date,
        required: [true, "Initial Date required"]
    },
    tasks: [{
        type: SchemaTypes.ObjectId,
        default: [],
        ref: "Task"
    }]
})

BoardSchema.pre("find", function(next:NextFunction) {
    //Aqui hacemos el populate con los tasks escogiendo solo el nombre de la tarea
    this.populate("tasks",{ title:1,employees:0, initDate:1, endDate:1, state:1 });
    next();    
})

BoardSchema.pre("findOne", function(next:NextFunction){
    this.populate("tasks",  {title:1,employees:0, initDate:1, endDate:1, state:1 });
    next();
})
const BoardModel = model<IBoard>("Board", BoardSchema)

export default BoardModel