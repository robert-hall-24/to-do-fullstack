import { Task } from "../../models/tasks"
import { useTasks } from "../apis/use-tasks"

interface Props {
  todos: Task[]
}


export default function TodoList({todos}: Props) {
 
  return (
    <>
    <h1>To Do List</h1>
    <div>
      <ul>
        {todos.map((task) => 
        <li key={task.id}>{task.task}</li>)}
      </ul>
    </div>

    </>
  )
}

