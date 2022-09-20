"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const tasksController_1 = require("../../controllers/tasks/tasksController");
const taskRouter = (0, express_1.Router)();
exports.taskRouter = taskRouter;
taskRouter.get('/getUserTasks', tasksController_1.getUserTasks);
//# sourceMappingURL=tasksRouter.js.map