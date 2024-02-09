import FilterByCharacter from "./FilterByCharacter"
import FilterByHouse from "./FilterByHouse"
import PropTypes from "prop-types";

function Filters({filterCharacter, handleFilterCharacter}) {
  return (
    <form className="form">
      <FilterByCharacter filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse/>
    </form>
  )
}

Filters.propTypes = {
  filterCharacter: PropTypes.string,
  handleFilterCharacter: PropTypes.func
}

export default Filters