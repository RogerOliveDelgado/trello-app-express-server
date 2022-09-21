import Task from "../Tasks/Tasks.interface"

export default interface IBoard{
    name: string,
    initDate: Date,
    tasks : Task[]
}