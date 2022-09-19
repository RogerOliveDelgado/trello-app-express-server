import { Schema, model, SchemaTypes} from 'mongoose'
import Board from './Board.interface';

const BoardSchema = new Schema<Board>({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    tasks: [{
        type: SchemaTypes.ObjectId,
        default: [],
        ref: "Task"
    }]
})

const BoardModel = model<Board>("Board", BoardSchema)

export default BoardModel