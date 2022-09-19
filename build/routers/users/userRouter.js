"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../../controllers/users/userController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/signInUser', userController_1.signInUser);
userRouter.post('/signUpUser', userController_1.signUpUser);
//# sourceMappingURL=userRouter.js.map