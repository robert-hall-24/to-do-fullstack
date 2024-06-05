import request from 'superagent'
const rootUrl = '/api/v1/tasks/'

export async function postTask(task: string) {
  await request.post(rootUrl).send(task)
}
