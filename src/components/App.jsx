// Fichero src/components/App.jsx
import '../styles/App.scss';
import getDataFromApi from "../services/api"
import { useState, useEffect} from 'react';
import Filters from './filters/Filters';
import CharactersList from './characters/CharactersList';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import CharacterDetail from './Detail/CharacterDetail';

function App() {

  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("")
  const [filterHouse, setFilterHouse] = useState ("")

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
      setFilterHouse("Gryffindor")
    })
  }, [])

  const handleFilterCharacter = (value) => {
    setFilterCharacter(value)
  }

  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }

  //las funciones de filtros en sí
  const filteredCharacters = characters
  .filter((character) => character.name.toLowerCase().includes(filterCharacter))
  .filter((character) => character.house.includes(filterHouse))


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


  //datos y constantes para las rutas. usamos matchPath(), permite validar si la ruta que quieres renderizar cumple con un patrón dado. Pathname necesita dos parámetros, la ruta dinámica y la ruta en la que estás, es un comparador de dos cosas que deben coincidir, match.
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname)
  //con la información que está en params, sacamos el id del character

  const idCharacter = routeData !== null ? routeData.params.idCharacter : null
  //Así consigo el id, ahora tengo que sacar de esa ruta la info del personaje clicado
  const characterData = characters.find((character) => character.id === idCharacter);
  

  

  return (
    <>
      <header className='title'>
        <img src="./title.png" alt="" />
      </header>
      <Routes>
        
          <Route path="/" element={
            <>
                <Filters filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} handleFilterHouse={handleFilterHouse}/>
              
                <CharactersList characters={filteredCharacters}/>
            </>
          } />

          <Route path="/character/:idCharacter" element={<CharacterDetail character={characterData}/>}/>

      </Routes>
    </>
  )
  
      
}

export default App;