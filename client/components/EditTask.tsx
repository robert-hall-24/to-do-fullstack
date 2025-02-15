import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskData } from '../../models/tasks'
import { updateTask } from '../apis/update-todo'

interface Props {
  id: number
  currentTodo: string
}

export default function EditTask({ id, currentTodo }: Props) {
  const queryClient = useQueryClient()
  const updateTodoMutation = useMutation({
    mutationFn: (newTodo: TaskData) => updateTask(id, newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  const [list, setList] = useState({
    task: currentTodo,
    completed: false,
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setList({ ...list, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateTodoMutation.mutate(list)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="task"
          name="task"
          type="text"
          value={list.task}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}
