import { Schema, model, SchemaTypes } from "mongoose";
import IBoard from "./Board.interface";
import autoPopulate from "../../utils/populate";

const BoardSchema = new Schema<IBoard>({
	name: {
		type: String,
		required: [true, "Name required"],
	},
	initDate: {
		type: Date,
		required: [true, "Initial Date required"],
	},
	tasks: [
		{
			type: SchemaTypes.ObjectId,
			default: [],
			ref: "Task",
		},
	],
});

BoardSchema.pre("find", autoPopulate("tasks"));
BoardSchema.pre("findOne", autoPopulate("tasks"));


const BoardModel = model<IBoard>("Board", BoardSchema);


export default BoardModel;
