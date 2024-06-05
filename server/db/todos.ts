import { Task } from "../../models/tasks";
import connection from "./connection";

export function getAllTasks(): Promise<Task[]> {
  return connection("todos").select()

}

export function getTaskById(id: number): Promise<Task>  {
  return connection("todos").where({id}).first()
}

console.log(getTaskById(2))