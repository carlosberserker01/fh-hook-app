import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

  const [ formState, setFormState ] = useState( initialForm )

  const onInputChange = ({ target }) => {
    const { name, value } = target 
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  const onResetForm = () => {
    setFormState( initialForm )
  }

  //Necesitamos exponer el valor del form (formState) y la forma de cambiarlo (onInputChange)
  // El ...formState manda los nombres de todas las keys
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
