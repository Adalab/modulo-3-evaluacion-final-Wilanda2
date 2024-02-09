
const getDataFromApi =() => {

  return fetch("https://hp-api.onrender.com/api/characters/")
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map((character) => {
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                gender: character.gender,
                house: character.house,
                alive: character.alive,
                image: character.image,
                
            }
            
        })
        return cleanData;
        
        
    })
}

export default getDataFromApi;