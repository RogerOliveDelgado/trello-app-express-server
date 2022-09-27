import Task from "../Tasks/Tasks.interface"
import {Model} from 'mongoose'
// import { Interfaces } from '../../interfaces/interfaces';

export default interface IUser {
    [key : string] : any
    firstName: string
    lastName: string
    address: string
    birthday: Date
    email: string
    password: string
    role: Role
    profilePicture?: string
    tasks: Task[],
}

export interface IUserMethods {
    comparePassword: (candidatePassword: string) => Promise<Boolean>;
}

export type UserModel = Model<IUser, {}, IUserMethods>

type Role = "Admin" | "User"