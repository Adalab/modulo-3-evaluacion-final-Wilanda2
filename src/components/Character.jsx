
function Character({ character }) {
  return (
    <div>
      <img src={character.image} alt={`${character.name}'s picture`} />
      <h4>{character.name}</h4>
      <h4>{character.species}</h4>
    </div>
  )
}

export default Character