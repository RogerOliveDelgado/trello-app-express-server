import ITask from "../Tasks/Tasks.interface";
export default interface IBoard {
    [key: string]: any;
    name: string;
    initDate: Date;
    tasks: ITask[];
}
