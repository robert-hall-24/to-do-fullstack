import { Task } from "../../models/tasks";
import connection from "./connection";

export function getAllTasks(): Promise<Task[]> {
  return connection("todos").select()

}

console.log(getAllTasks())