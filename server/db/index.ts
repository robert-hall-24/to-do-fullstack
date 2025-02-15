import { Task, TaskData } from '../../models/tasks'
import connection from './connection.ts'

export async function getAllTasks(): Promise<Task[]> {
  return connection('todos').select()
}

export function getTaskById(id: number): Promise<Task> {
  return connection('todos').where({ id }).first()
}

export function updateTask(updateTask: TaskData, id: number) {
  const { task, completed } = updateTask
  const count = connection('todos').where({ id }).update({ task, completed })
  return count
}

export function addTask(createTask: TaskData) {
  // const {task, completed} = createTask
  const create_task = connection('todos').insert({ ...createTask })
  return create_task
}

export function deleteTask(id: number) {
  const task = connection('todos').where({ id }).delete()
  return task
}
