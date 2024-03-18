import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = ( newTodo ) => {
    const action = {
      type: 'ADD TODO',
      payload: newTodo
    }
    dispatch( action )
  }

  const removeTodo = ( id ) => {
    const action = {
      type: 'REMOVE TODO',
      payload: id
    }
    dispatch( action )
  }

  const onToggleTodo = ( id ) => {
    const action = {
      type: 'TOGGLE TODO',
      payload: id
    }
    dispatch( action )
  }

  const todosCount = todos.length

  const pendingTodosCount = todos.filter( todo => !todo.done ).length

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    removeTodo,
    onToggleTodo,
  }
}
