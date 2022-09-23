"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BoardSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    initDate: {
        type: Date,
        required: [true, "Initial Date required"]
    },
    tasks: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            default: [],
            ref: "Task"
        }]
});
BoardSchema.pre("find", function (next) {
    //Aqui hacemos el populate con los tasks escogiendo solo el nombre de la tarea
    this.populate("tasks", { title: 1, employees: 0, initDate: 1, endDate: 1, state: 1 });
    next();
});
BoardSchema.pre("findOne", function (next) {
    this.populate("tasks", { title: 1, employees: 0, initDate: 1, endDate: 1, state: 1 });
    next();
});
const BoardModel = (0, mongoose_1.model)("Board", BoardSchema);
exports.default = BoardModel;
//# sourceMappingURL=BoardModel.js.map