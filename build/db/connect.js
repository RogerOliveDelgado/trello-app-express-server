"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_ATLAS_URI || "";
function connect() {
    console.log(process.env.MONGO_ATLAS_URI);
    return mongoose_1.default.connect(MONGO_URI);
}
exports.default = connect;
//# sourceMappingURL=connect.js.map