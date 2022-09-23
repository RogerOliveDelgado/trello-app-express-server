"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const UsersModel_1 = tslib_1.__importDefault(require("../Users/UsersModel"));
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    employees: [{
            type: mongoose_1.SchemaTypes.ObjectId,
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
        type: mongoose_1.SchemaTypes.ObjectId,
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
});
TaskSchema.pre("save", async function (next) {
    const user = await UsersModel_1.default.findById({ _id: this.employees }).lean().exec();
    user.tasks.push(this);
    UsersModel_1.default.findByIdAndUpdate({ _id: user._id }, { $set: { tasks: user.tasks } }, { new: true }).lean().exec();
    next();
});
TaskSchema.pre("find", function (next) {
    this.populate("employees", { firstName: 1, lastName: 1, tasks: 0 });
    next();
});
TaskSchema.pre("findOne", function (next) {
    this.populate("employees", { firstName: 1, lastName: 1, tasks: 0 });
    next();
});
const TaskModel = (0, mongoose_1.model)("Task", TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=TasksModel.js.map