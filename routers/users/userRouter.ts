import { Router } from "express";
import { signInUser, signUpUser } from '../../controllers/users/userController'

const userRouter = Router();

userRouter.post('/signInUser', signInUser);
userRouter.post('/signUpUser', signUpUser);

export { userRouter };