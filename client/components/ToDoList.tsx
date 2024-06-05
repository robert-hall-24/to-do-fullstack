import { Task } from '../../models/tasks'
import { useTasks } from '../apis/fetch-tasks'

interface Props {
  todos: Task[]
}

export default function TodoList({ todos }: Props) {
  return (
    <>
      <div>
        <ul>
          {todos.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
