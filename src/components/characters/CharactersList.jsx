import { Link } from "react-router-dom";
import Character from "./Character"
import PropTypes from "prop-types";

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return <li className="li" key={character.id}>
       <Link to={`/character/${character.id}`}>
        <Character character={character}/>
      </Link>
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