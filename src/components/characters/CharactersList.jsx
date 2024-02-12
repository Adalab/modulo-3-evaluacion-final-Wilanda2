import { Link } from "react-router-dom";
import Character from "./Character"
import PropTypes from "prop-types";

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li className="li" key={character.id}>
       <Link to={`/character/${character.id}`} className="li__title">
        <Character character={character}/>
      </Link>
    </li>
  })

  return (
    <>
      
        <ul className="charactersList">
          {renderCharacters}
        </ul>
      
    </>
    
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array
}
export default CharactersList