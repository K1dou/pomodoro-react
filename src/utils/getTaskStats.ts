import { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task:TaskModel, activeTask: TaskModel | null) {

    if(task.interruptDate)return "Interrompida";
    if(task.complete)return "Completa";
    if(task.id === activeTask?.id)return "Em Progresso";
    return "Abandonada";
}