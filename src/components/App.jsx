// Fichero src/components/App.jsx
import '../styles/App.scss';
import getDataFromApi from "../services/api"
import { useState } from 'react';
import { useEffect } from 'react';
import Filters from './Filters';
import CharactersList from './CharactersList';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
    })
  }, [])


  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>

        <section>
          <Filters/>
        </section>

        <section>
          <CharactersList/>
        </section>

      </main>
    </>
  )
  
      
}

export default App;