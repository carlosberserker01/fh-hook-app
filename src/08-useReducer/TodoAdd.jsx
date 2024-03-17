import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!description) return 

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    }

    onNewTodo( newTodo )
    onResetForm()
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text" 
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>

      <button
        className="btn btn-outline-primary mt-1"
        onClick={ onResetForm }
      >
        Reset
      </button>
    </form>
  )
}
