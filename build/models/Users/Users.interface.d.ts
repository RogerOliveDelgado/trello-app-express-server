import Task from "../Tasks/Tasks.interface";
export default interface IUser {
    firstName: string;
    lastName: string;
    address: string;
    birthday: Date;
    email: string;
    password: string;
    role: Role;
    profilePicture?: string;
    tasks: Task[];
    comparePassword?: (candidatePassword: string) => Promise<Boolean>;
}
declare type Role = "Admin" | "User";
export {};
