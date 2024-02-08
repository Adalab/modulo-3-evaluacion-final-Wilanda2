import FilterByCharacter from "./FilterByCharacter"
import FilterByHouse from "./FilterByHouse"

function Filters({filterCharacter, handleFilterCharacter}) {
  return (
    <form className="form">
      <FilterByCharacter filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse/>
    </form>
  )
}

export default Filters