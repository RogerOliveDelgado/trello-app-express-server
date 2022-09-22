"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (field) => function (next) {
    this.populate(field);
    next();
};
//# sourceMappingURL=populate.js.map