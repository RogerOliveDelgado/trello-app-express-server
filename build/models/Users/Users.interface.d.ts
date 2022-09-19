import Task from "../Tasks/Tasks.interface";
export default interface User {
    firstName: string;
    lastName: string;
    address: string;
    birthday: Date;
    email: string;
    password: string;
    role: Role;
    profilePicture: string;
    tasks: Task[];
}
declare type Role = "Admin" | "User";
export {};
