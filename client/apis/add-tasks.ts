import request from 'superagent'
import { TaskData } from '../../models/tasks'
const rootUrl = '/api/v1/tasks/'

export async function postTask(task: TaskData) {
  console.log('Frontend task post:', task)
  await request.post(rootUrl).send(task)
}
