import Character from "./Character"

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li className="card" key={character.id}> 
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