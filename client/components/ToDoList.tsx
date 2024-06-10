import { useRef, useState } from 'react'
import { Task } from '../../models/tasks'
import EditTask from './EditTask'

interface Props {
  todos: Task[]
}

export default function TodoList({ todos }: Props) {
  const [isEditable, setIsEditable] = useState(false)

  function handleEditClick() {
    setIsEditable(!isEditable)
  }

  return (
    <>
      <div>
        <ul>
          {todos.map((task) => (
            <li key={task.id}>
              {isEditable ? (
                <EditTask id={task.id} currentTodo={task.task} />
              ) : (
                task.task
              )}
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </>
  )
}
