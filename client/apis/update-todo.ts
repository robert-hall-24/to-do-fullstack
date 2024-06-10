import request from 'superagent'
import { Task, TaskData } from '../../models/tasks'
const rootUrl = '/api/v1/tasks/'

export async function updateTask(id: number, task: TaskData) {
  await request.patch(`${rootUrl}${id}`).send(task)
}
