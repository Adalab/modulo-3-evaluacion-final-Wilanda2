import PropTypes from "prop-types";

function CharacterDetail( {character} ) {

    const sampleImg = "https://tetoncounty.librarycalendar.com/sites/default/files/2023-10/Harry%20Potter%20trivia%20icon.png ";
    // const aliveIcon = <i className="fa-solid fa-heart-pulse"></i>
    // const deadIcon = `<i className="fa-solid fa-ghost"></i>`;
    // const personIcon = `<i className="fa-solid fa-user"></i>`;
    // const creatureIcon = <i className="fa-solid fa-paw"></i>;
//lo intenté poner con esta sintaxis
   // ${creatureIcon}
    //PLANTEAMIENTOS DE LAS VALIDACIONES DE LOS INPUTS:

  //   const renderCard = <h4 className="container__detail--text">Estatus: {
  //     if (character.alive === true && character.gender === female) 
  //     return <h4 className="container__detail--text">Estatus: Viva <i className="fa-solid fa-heart-pulse"></i></h4>
  //  else if (character.alive === false && character.gender === female) character.alive} <i className="fa-solid fa-heart-pulse"></i></h4>

  

    // if (character.alive === true && character.gender === female) {
    //     return <h4 className="container__detail--text">Estatus: Viva <i className="fa-solid fa-heart-pulse"></i></h4>
    // } else if (character.alive === false && character.gender === female) {
    //     return <h4 className="container__detail--text">Estatus: Muerta <i className="fa-solid fa-ghost"></i></h4>
    // } else if (character.alive === true && character.gender === male) {
    //     return <h4 className="container__detail--text">Estatus: Vivo <i className="fa-solid fa-heart-pulse"></i></h4>
    // } else if (character.alive === false && character.gender === male) {
    //   return <h4 className="container__detail--text">Estatus: Muerto <i className="fa-solid fa-ghost"></i></h4>
    // }
  
   //
   //
  return (
    <>
    <h4 className="back"><i className="fa-solid fa-dragon fa-flip-horizontal"></i> Volver</h4>
    <div className="container">
      <img className="container__detail" src={character.image || sampleImg} alt={`${character.name}'s picture`} />
        <div>
          <h4 className="container__detail--name">{character.name}</h4>
          {/* {renderCard} */}
          <h4 className="container__detail--text">Estatus: {character.alive === true ? (`Con vida ❤`) : (`Ha muerto 👻`)} </h4>
          
          {/* Esta validación no funciona, sale siempre criatura. Me gustaría poner un icono por cada especie, de momento tengo humana y criatura, pero hay human, ghost, werewolf, half-giant, half-human, vampire, cat, goblin, owl, poltergeist, centaur, dragon, three-headed-dog, house-elf, hippogriff, acromantula, giant */}
          <h4 className="container__detail--text">Especie: {character.species === human ? (`Humana 🧑`) : (`Criatura 🐾`)}</h4>
          <h4 className="container__detail--text">Casa: {character.house}</h4>
      </div>
    </div>
    </>
  )
}
CharacterDetail.propTypes = {
    character: PropTypes.object
  }

export default CharacterDetail

  //Esto iría en el detail
  //if (character.alive === true && gender === female) {
  // return <p>"Viva"</p>
  //} else if (character.alive === false && gender === female) {
  // return <p>"Muerta"</p>
  //} else if (character.alive === true && gender === male) {
  // return <p>"Vivo"</p>
  //} else if (character.alive === false && gender === male) {
  // return <p>"Muerto"</p>
  //}

  //Más simple: if (character.alive === true ) {
  // return <p>"Con vida"</p>
  //} else if (character.alive === false) {
  // return <p>"En el más allá"</p>