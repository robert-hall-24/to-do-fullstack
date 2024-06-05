import request from 'superagent'
import { Task } from '../../models/tasks'
const rootUrl = '/api/v1/tasks/'

export async function fetchTasks(): Promise<Task[]> {
  const res = await request.get(rootUrl)
  return res.body
}
