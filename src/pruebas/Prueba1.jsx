import { useEffect, useState } from "react"

export const Prueba1 = () => {

  const [value, setValue] = useState(0);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    setValue(0)  
  }, [textInput])
  
  const handleInput = ({ target }) => {
    setTextInput(target.value)
  }

  return (
    <>
      <h2>{ value }</h2>
      <button onClick={ () => setValue(value + 1) }>+1</button>
      <input type="text" onChange={ handleInput } value={textInput}/>
    </>
  )
}
