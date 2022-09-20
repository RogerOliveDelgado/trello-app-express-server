"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTask = exports.getUserTasks = void 0;
const tslib_1 = require("tslib");
const TasksModel_1 = tslib_1.__importDefault(require("../../models/Tasks/TasksModel"));
const createUserTask = async (req, res, _next) => {
    const { title, description, employees, initDate, endDate, boardRefID, state, tags } = req.body;
    try {
        const task = await TasksModel_1.default.create({
            title,
            description,
            initDate,
            endDate,
            boardRefID,
            state,
        });
        res.status(200).send({ ok: true, data: task });
    }
    catch (error) {
        res.send({ ok: false, msg: 'Task cannot be created' });
    }
};
exports.createUserTask = createUserTask;
const getUserTasks = async (_req, _res, _next) => {
};
exports.getUserTasks = getUserTasks;
const updateUserTask = async (_req, _res, _next) => {
};
const deleteUserTask = async (_req, _res, _next) => {
};
//# sourceMappingURL=tasksController.js.map