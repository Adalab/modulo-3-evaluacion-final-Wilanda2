import Character from "./Character"
import PropTypes from "prop-types";

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li className="li" key={character.id}> 
      <Character character={character}/>
    </li>
  })
  return (
    <>
      <section>
        <ul className="charactersList">
          {renderCharacters}
        </ul>
      </section>
    </>
    
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array
}
export default CharactersList