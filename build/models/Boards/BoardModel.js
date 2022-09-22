"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const populate_1 = tslib_1.__importDefault(require("../../utils/populate"));
const BoardSchema = new mongoose_1.Schema({
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
            type: mongoose_1.SchemaTypes.ObjectId,
            default: [],
            ref: "Task",
        },
    ],
});
BoardSchema.pre("find", (0, populate_1.default)("tasks"));
BoardSchema.pre("findOne", (0, populate_1.default)("tasks"));
const BoardModel = (0, mongoose_1.model)("Board", BoardSchema);
exports.default = BoardModel;
//# sourceMappingURL=BoardModel.js.map