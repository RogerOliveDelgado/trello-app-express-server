"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = exports.signInUser = void 0;
//Function to login user
const signInUser = async (req, _res, _next) => {
    //First we take the email and password passed by the body of the request
    const { email, password } = req.body;
    //Second we have to verify the email and password passed by the body of the request
    //are correct, if not => res.send("Error, Email or password are wrong")
};
exports.signInUser = signInUser;
//Function to SignUp user
const signUpUser = async (_req, _res, _next) => {
};
exports.signUpUser = signUpUser;
//# sourceMappingURL=userController.js.map