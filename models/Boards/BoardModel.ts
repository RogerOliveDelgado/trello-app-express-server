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

const BoardModel = model<IBoard>("Board", BoardSchema)

export default BoardModel