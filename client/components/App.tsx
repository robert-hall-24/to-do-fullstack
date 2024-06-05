import AddTodo from './AddTodo.tsx'
import TodoList from './ToDoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <TodoList />
      <footer className="footer"></footer>
    </>
  )
}

export default App
