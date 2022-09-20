"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const tasksController_1 = require("../../controllers/tasks/tasksController");
const baseController_1 = require("../../controllers/base/baseController");
const TasksModel_1 = tslib_1.__importDefault(require("../../models/Tasks/TasksModel"));
const taskRouter = (0, express_1.Router)();
exports.taskRouter = taskRouter;
// taskRouter.get('/getUserTasks',getUserTasks);
taskRouter.post('', tasksController_1.createUserTask);
taskRouter.post('/:taskId', (0, baseController_1.update)(TasksModel_1.default));
//# sourceMappingURL=tasksRouter.js.map