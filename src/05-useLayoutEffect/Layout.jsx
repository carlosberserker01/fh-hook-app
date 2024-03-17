import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { PokemonCard } from "../03-examples/PokemonCard"


export const Layout = () => {
  
  const { counter, increment, decrement } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`)

  // console.log("data", data)
  // const pokes = !!data && data
  // setPokemon()

  // console.log(data)
  

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      {
        isLoading 
        ? <LoadingMessage /> 
        : (
          <PokemonCard 
            // {...data}
            id={data.id}
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.other.showdown.front_default
            ]}
          />
        )
      }
      {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}
      {/* <h2>{data?.name}</h2> */}
      <button className="btn btn-primary" onClick={ () => counter > 1 ? decrement() : null }>Anterior</button>
      <button className="btn btn-primary" onClick={ () => increment() }>Siguiente</button>
    </>
  )
}
