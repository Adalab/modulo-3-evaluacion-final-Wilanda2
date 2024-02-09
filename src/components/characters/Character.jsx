import PropTypes from "prop-types";

function Character({ character }) {
  const sampleImg = "https://tetoncounty.librarycalendar.com/sites/default/files/2023-10/Harry%20Potter%20trivia%20icon.png "
  return ( 
    <div >
      <img className="card" src={character.image || sampleImg} alt={`${character.name}'s picture`} />
      <h4 className="charDesc">{character.name}</h4>
      <h4 className="charDesc">{character.species}</h4>
      </div>
  )
}

Character.propTypes = {
  character: PropTypes.object
}

export default Character