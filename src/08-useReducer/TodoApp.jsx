import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks"

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, removeTodo, onToggleTodo } = useTodos()

  return (
    <>
      <h1>TodoApp: {todosCount}</h1>
      <small>Pendientes: {pendingTodosCount} {pendingTodosCount > 0 ? '😫' : '😁'}</small>
      <hr />

      <div className="row">
        <div>
          <h4>Agregar Tarea</h4>
          <TodoAdd 
            onNewTodo={ handleNewTodo }
          />
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <div>
          <TodoList 
            todos={todos}
            removeTodo={ removeTodo }
            onToggleTodo={ onToggleTodo }
          />
        </div>
      </div>

      <footer 
        style={{ position: 'absolute', bottom: 8, right: 8}}
      >
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react-logo" height="32px"/>
        {` by Carlos Lopez a.k.a. `}
        <code>devserker</code>
      </footer>
      
    </>
  )
}
