import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../apis/fetch-tasks.ts'
import AddTodo from './AddTodo.tsx'
import TodoList from './ToDoList.tsx'

function App() {
  const {
    data: todos,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetchTasks(),
  })
  if (isError) {
    return error
  }
  if (isFetching) {
    return <p>...Loading</p>
  }
  if (todos) {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
          <TodoList todos={todos} />
        </header>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}

export default App
