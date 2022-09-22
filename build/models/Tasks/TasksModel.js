"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const BoardModel_1 = tslib_1.__importDefault(require("../../models/Boards/BoardModel"));
const populate_1 = tslib_1.__importDefault(require("../../utils/populate"));
const TaskSchema = new mongoose_1.Schema({
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
            type: mongoose_1.SchemaTypes.ObjectId,
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
    board: {
        type: mongoose_1.SchemaTypes.ObjectId,
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
TaskSchema.pre("save", async function (next) {
    try {
        const boardToUpdate = await BoardModel_1.default.findOne({ _id: this.board });
        boardToUpdate.tasks.push(this);
        await boardToUpdate.save();
        next();
    }
    catch (error) {
        next(error);
    }
});
TaskSchema.pre("find", (0, populate_1.default)(["board", "employees"]));
TaskSchema.pre("findOne", (0, populate_1.default)(["board", "employees"]));
const TaskModel = (0, mongoose_1.model)("Task", TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=TasksModel.js.map