import { useState } from 'react'
import { postTask } from '../apis/add-tasks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskData } from '../../models/tasks'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const queryClient = useQueryClient()
  const addTodoMutation = useMutation({
    mutationFn: (task: string) => postTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['task'],
      })
    },
  })

  const [form, setForm] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTodoMutation.mutate(form)
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="task">New Todo: </label>
        <input
          onChange={(e) => handleChange(e)}
          id="task"
          name="task"
          className="new-todo"
          placeholder="What needs to be done?"
          value={form}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddTodo
