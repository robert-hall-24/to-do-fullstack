import request from 'superagent'
const rootUrl = '/api/v1/tasks/'

export async function postTask(task: string) {
  console.log('Frontend task post:', task)
  await request.post(rootUrl).send(task)
}
