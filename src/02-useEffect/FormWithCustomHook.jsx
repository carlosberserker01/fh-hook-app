import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  //Como en el useForm se coloco ...formState, puedo acceder a todas las keys aqui mismo
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })

  // Si no se expone de useForm el ...formState entonces desesctructuramos normal
  // const { username, email, password } = formState
  
  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />

      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="carlos@google.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />

      <input 
        type="password" 
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={ onInputChange }
      />

      <button onClick={ onResetForm }  className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
