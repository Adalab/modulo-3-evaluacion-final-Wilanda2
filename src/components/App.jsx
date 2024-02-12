// Fichero src/components/App.jsx
import '../styles/App.scss';
import getDataFromApi from "../services/api"
import { useState, useEffect} from 'react';
import Filters from './filters/Filters';
import CharactersList from './characters/CharactersList';
import { Link, Route, Routes, matchPath, useLocation } from 'react-router-dom';
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





  //datos y constantes para las rutas. usamos matchPath(), permite validar si la ruta que quieres renderizar cumple con un patrón dado. Pathname necesita dos parámetros, la ruta dinámica y la ruta en la que estás, es un comparador de dos cosas que deben coincidir, match.
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname)
  //con la información que está en params, sacamos el id del character

  const idCharacter = routeData !== null ? routeData.params.idCharacter : null
  //Así consigo el id, ahora tengo que sacar de esa ruta la info del personaje clicado
  const characterData = characters.find((character) => character.id === idCharacter);
  

  

  return (
    <>
    <Link to= "/">
      <header className='title'>
        <img src="./title.png" alt="Harry Potter" className='title__img'/>
      </header>
    </Link>
      <Routes>
        
          <Route path="/" element={
            <>
                <Filters filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} handleFilterHouse={handleFilterHouse}/>
                
                <section className='error'>
                  {filteredCharacters.length > 0 ? (
                  <CharactersList characters={filteredCharacters}/>
                  ) : (
                    `No hay coincidencias con ${filterCharacter}.`
                  )}
                </section>               
            </>
          } />

          <Route path="/character/:idCharacter" element={<CharacterDetail character={characterData} characters={filteredCharacters}/>}/>

      </Routes>
    </>
  )
  
      
}

export default App;