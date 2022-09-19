"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRouter = void 0;
const express_1 = require("express");
const tasksController_1 = require("../../controllers/tasks/tasksController");
const tasksRouter = (0, express_1.Router)();
exports.tasksRouter = tasksRouter;
tasksRouter.get('/getUserTasks', tasksController_1.getUserTasks);
//# sourceMappingURL=tasksRouter.js.map