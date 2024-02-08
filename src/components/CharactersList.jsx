import Character from "./Character"

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li key={character.id}> 
      <Character character={character}/>
    </li>
  })
  return (
    <>
        <ul className="cards">
          {renderCharacters}
        </ul>
    </>
    
  )
}

export default CharactersList