export const PokemonCard = ({ id, name, sprites = []}) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">#{id} - {name}</h2>

      {/* Imagenes */}
      <div>
        {sprites.map(sprite => (
          <img key={sprite} src={sprite} alt={sprite} />
        ))}
        {/* <img src={sprites[0]} alt="" />
        <img src={sprites.front_shiny} alt="" /> */}
        {/* <img src={sprites.other.showdown.front_default} alt="" className="mt-3 ms-3"/> */}
      </div>
    </section>
  )
}
