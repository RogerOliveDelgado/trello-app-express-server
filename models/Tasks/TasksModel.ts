import { NextFunction } from "express";
import { Schema, model, SchemaTypes, Model } from "mongoose";
import ITask from "./Tasks.interface";
import BoardModel from "../../build/models/Boards/BoardModel";

const TaskSchema = new Schema<ITask>({
	title: {
		type: String,
		required: [true, "Title required"],
	},
	description: {
		type: String,
		required: [true, "Description required"],
	},
	employees: [
		{
			type: SchemaTypes.ObjectId,
			ref: "User",
			default: [],
		},
	],
	initDate: {
		type: Date,
		required: [true, "initDate required"],
	},
	endDate: {
		type: Date,
		required: [true, "endDate required"],
	},
	boardRefID: {
		type: SchemaTypes.ObjectId,
		ref: "Board",
		required: [true, "BoardID required"],
	},
	state: {
		type: String,
		required: [true, "Task state required"],
	},
	tags: [
		{
			type: String,
		},
	],
});

TaskSchema.pre("save", async function () {
	const boardToUpdate = await BoardModel.findOne({ _id: this.boardRefID });
	boardToUpdate.tasks.push(this);
});

TaskSchema.pre("findOne", function (next: NextFunction) {
	this.populate(["boardRefID", "employees"]);
	next();
});

const TaskModel = model<ITask>("Task", TaskSchema);

export default TaskModel;
