import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterDetail( { character } ) {

    const sampleImg = "https://tetoncounty.librarycalendar.com/sites/default/files/2023-10/Harry%20Potter%20trivia%20icon.png ";
    

    const renderStatus = () => {
    if (character.alive === true && character.gender === "female") {
        return <h4 className="container__detail--text">Estatus: Viva <i className="fa-solid fa-heart-pulse"></i></h4>
    } else if (character.alive === false && character.gender === "female") {
        return <h4 className="container__detail--text">Estatus: Muerta <i className="fa-solid fa-skull"></i></h4>
    } else if (character.alive === true && character.gender === "male") {
        return <h4 className="container__detail--text">Estatus: Vivo <i className="fa-solid fa-heart-pulse"></i></h4>
    } else if (character.alive === false && character.gender === "male") {
        return <h4 className="container__detail--text">Estatus: Muerto <i className="fa-solid fa-skull"></i></h4>
    } 
  }

    const renderSpecies = () => {
      if (character.species === "human" && character.gender === "female") {
        return <h4 className="container__detail--text">Especie: Humana <i className="fa-solid fa-user"></i></h4>
    } else if (character.species === "human" && character.gender === "male") {
        return <h4 className="container__detail--text">Especie: Humano <i className="fa-solid fa-user"></i></h4>
    } else if (character.species === "ghost") {
        return <h4 className="container__detail--text">Especie: Fantasma 👻</h4>
    } else if (character.species === "werewolf") {
        return <h4 className="container__detail--text">Especie: Hombre lobo 🐺</h4>
    } else if (character.species === "half-giant") {
        return <h4 className="container__detail--text">Especie: Semigigante 💁</h4>
    } else if (character.species === "giant") {
        return <h4 className="container__detail--text">Especie: Semigigante 🙋‍♀️</h4>
    } else if (character.species === "half-human") {
        return <h4 className="container__detail--text">Especie: Semihumano 🙅‍♀️</h4>
    } else if (character.species === "vampire") {
        return <h4 className="container__detail--text">Especie: Vampiro 🧛‍♀️</h4>
    } else if (character.species === "cat") {
        return <h4 className="container__detail--text">Especie: Gato 🐱</h4>
    } else if (character.species === "goblin") {
      return <h4 className="container__detail--text">Especie: Gnomo 😈 </h4>
    } else if (character.species === "owl") {
      return <h4 className="container__detail--text">Especie: Lechuza 🦉</h4>
    } else if (character.species === "poltergeist") {
      return <h4 className="container__detail--text">Especie: Poltergeist 👾</h4>
    } else if (character.species === "centaur") {
      return <h4 className="container__detail--text">Especie: Centauro 🏹</h4>
    } else if (character.species === "dragon") {
      return <h4 className="container__detail--text">Especie: Dragón 🐉</h4>
    } else if (character.species === "three-headed dog") {
      return <h4 className="container__detail--text">Especie: Perro de tres cabezas 🐶🐶🐶</h4>
    } else if (character.species === "house-elf") {
      return <h4 className="container__detail--text">Especie: Elfo doméstico 🧝‍♂️</h4>
    } else if (character.species === "hippogriff") {
      return <h4 className="container__detail--text">Especie: Hipogrifo 🦅</h4>
    } else if (character.species === "acromantula") {
      return <h4 className="container__detail--text">Especie: Acromántula 🕷</h4>
    }
  }

  const renderHouse = () => {
    if (character.house === "Gryffindor") {
      return (
        <div className="house">
          <h4 className="container__detail--text">Casa: Gryffindor</h4>
          <img src="gryffindor.jpg" alt="Emblema de Gryffindor" className="emblem"/>
        </div> 
        )
    } else if (character.house === "Slytherin") {
      return (
        <div className="house">
          <h4 className="container__detail--text">Casa: Slytherin</h4>
          <img src="slytherin.jpg" alt="Emblema de Slytherin" className="emblem"/>
        </div> 
      )
    } else if (character.house === "Hufflepuff") {
      return (
        <div className="house">
          <h4 className="container__detail--text">Casa: Hufflepuff</h4>
          <img src="hufflepuff.jpg" alt="Emblema de Hufflepuff" className="emblem"/>
        </div> 
      )
  } else if (character.house === "Ravenclaw") {
    return (
      <div className="house">
        <h4 className="container__detail--text">Casa: Ravenclaw</h4>
        <img src="ravenclaw.jpg" alt="Emblema de Ravenclaw" className="emblem"/>
      </div> 
    )
  }
}

  // const renderWizard = () => {
  //   if (character.wizard === true) {
  //     return (
  //       <h4 className="container__detail--text">Mundo: Mágico</h4>
  //     )
  //   } else if (character.wizard === false) {
  //     return (
  //       <h4 className="container__detail--text">Mundo: No mágico</h4>
  //     )
  //   }
  // }

  
  return (
    <>
    {
      <Link to="/" className="back">
        <h4 className="back__title"><i className="fa-solid fa-dragon fa-flip-horizontal"></i> Volver</h4>
      </Link>
    }
    
    <div className="container">
      <img className="container__detail" src={character.image || sampleImg} alt={`${character.name}'s picture`} />
        <div>
          <h4 className="container__detail--name">{character.name}</h4>
          {renderStatus()}
          {renderSpecies()}
          {renderHouse()}
          {/* {renderWizard()} */}
      </div>
    </div>
    </>
  )
}

CharacterDetail.propTypes = {
    character: PropTypes.object
    //renderSpecies: PropTypes.func
  }

export default CharacterDetail