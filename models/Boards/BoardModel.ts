import { Schema, model, SchemaTypes} from 'mongoose'
import IBoard from './Board.interface';

const BoardSchema = new Schema<IBoard>({
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

BoardSchema.pre("findOne", function (next) {
	this.populate("tasks");
	next();
});

const BoardModel = model<IBoard>("Board", BoardSchema)

export default BoardModel