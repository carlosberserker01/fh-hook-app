import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], removeTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map( todo => (
        <TodoItem
          key={todo.id} 
          todo={todo}
          removeTodo={removeTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  )
}
