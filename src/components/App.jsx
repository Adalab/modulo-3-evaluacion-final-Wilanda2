// Fichero src/components/App.jsx
import '../styles/App.scss';
import getDataFromApi from "../services/api"
import { useState, useEffect} from 'react';
import Filters from './filters/Filters';
import CharactersList from './characters/CharactersList';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import Character from './characters/Character';

function App() {

  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("")
  const [filterHouse, setFilterHouse] = useState ("")

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
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


  //datos y constantes para las rutas
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname)
  const idCharacter = routeData !== null ? routeData.params.idCharacter : null;
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

          <Route path="/character/:idCharacter" element={<Character character={characterData}/>}/>

      </Routes>
    </>
  )
  
      
}

export default App;