export const TodoItem = ({ todo, removeTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${todo.done ? "text-decoration-line-through" : ""}`} 
        style={{ cursor: 'pointer' }}
        onClick={ () => onToggleTodo(todo.id) }
      >
        { todo.description 
      }</span>
      <button 
        className="btn btn-danger" 
        onClick={ () => removeTodo(todo.id) }
      >
        Borrar
      </button>
    </li>
  )
}
