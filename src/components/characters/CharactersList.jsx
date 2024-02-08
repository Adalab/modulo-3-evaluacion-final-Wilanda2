import Character from "./Character"

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li key={character.id}> 
      <Character character={character}/>
    </li>
  })
  return (
    <>
      <section className='charactersList'>
        <ul className="cards">
          {renderCharacters}
        </ul>
      </section>
    </>
    
  )
}

export default CharactersList