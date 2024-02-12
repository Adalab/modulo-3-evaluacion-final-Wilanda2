import PropTypes from "prop-types";

function Character({ character }) {
  const sampleImg = "https://tetoncounty.librarycalendar.com/sites/default/files/2023-10/Harry%20Potter%20trivia%20icon.png ";

  const renderSpeciesCard = () => {
    if (character.species === "human" && character.gender === "female") {
      return <h4>Humana <i className="fa-solid fa-user"></i></h4>
  } else if (character.species === "human" && character.gender === "male") {
      return <h4>Humano <i className="fa-solid fa-user"></i></h4>
  } else if (character.species === "ghost") {
      return <h4>Fantasma 👻</h4>
  } else if (character.species === "werewolf") {
      return <h4>Hombre lobo 🐺</h4>
  } else if (character.species === "half-giant") {
      return <h4>Semigigante 💁</h4>
  } else if (character.species === "giant") {
      return <h4>Gigante 🙋‍♀️</h4>
  } else if (character.species === "half-human") {
      return <h4>Semihumano 🙅‍♀️</h4>
  } else if (character.species === "vampire") {
      return <h4>Vampiro 🧛‍♀️</h4>
  } else if (character.species === "cat") {
      return <h4>Gato 🐱</h4>
  } else if (character.species === "goblin") {
    return <h4>Gnomo 😈 </h4>
  } else if (character.species === "owl") {
    return <h4>Lechuza 🦉</h4>
  } else if (character.species === "poltergeist") {
    return <h4>Poltergeist 👾</h4>
  } else if (character.species === "centaur") {
    return <h4>Centauro 🏹</h4>
  } else if (character.species === "dragon") {
    return <h4>Dragón 🐉</h4>
  } else if (character.species === "three-headed dog") {
    return <><h4>Perro de tres cabezas</h4><h4>🐶🐶🐶</h4></>
  } else if (character.species === "house-elf") {
    return <h4>Elfo doméstico 🧝‍♂️</h4>
  } else if (character.species === "hippogriff") {
    return <h4>Hipogrifo 🦅</h4>
  } else if (character.species === "acromantula") {
    return <h4>Acromántula 🕷</h4>
  }
}
  return ( 
    <div className="li__element">
      <img className="card" src={character.image || sampleImg} alt={`Foto de ${character.name}`} />
      <div className="charDesc">
        <h4 >{character.name}</h4>
        <h4>{renderSpeciesCard()}</h4>
      </div>
    </div>
  )
}

 Character.propTypes = {
  character: PropTypes.object
  //renderSpecies: PropTypes.func
 }



export default Character