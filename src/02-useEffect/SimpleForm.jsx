import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'berserker',
    email: 'carlos@google.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target 
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  const users = ["pablo", "pepe", "azul", "berserker2"]

  useEffect(() => {
    // console.log("useEffect called!")
  }, [])

  useEffect(() => {
    // console.log("formState changed!")
  }, [ formState ])

  useEffect(() => {
    // console.log("email changed!")
  }, [ email ])
  
  return (
    <>
      <h1>Formulario simple</h1>
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
      
      { 
        ( users.includes(formState.username) ) && <Message />
      }

    </>
  )
}
