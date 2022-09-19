import { Request, Response, NextFunction } from "express";
import  UserModel  from '../../models/Users/UsersModel'

//Function to login user
const signInUser = async(req:Request, _res:Response, _next:NextFunction) => {
  //First we take the email and password passed by the body of the request
  const {email, password} = req.body;
  
  //Second we have to verify the email and password passed by the body of the request
  //are correct, if not => res.send("Error, Email or password are wrong")
}

//Function to SignUp user
const signUpUser = async(_req: Request, _res: Response, _next:NextFunction) => {

}

export {signInUser, signUpUser};