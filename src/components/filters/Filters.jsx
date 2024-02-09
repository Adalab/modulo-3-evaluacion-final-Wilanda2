import FilterByCharacter from "./FilterByCharacter"
import FilterByHouse from "./FilterByHouse"
import PropTypes from "prop-types";

function Filters({ filterCharacter, handleFilterCharacter, handleFilterHouse }) {
  return (
    <form className="form">
      <FilterByCharacter filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} handleFilterHouse={handleFilterHouse}/>
      <FilterByHouse handleFilterHouse={handleFilterHouse}/>
    </form>
  )
}

Filters.propTypes = {
  filterCharacter: PropTypes.string,
  handleFilterCharacter: PropTypes.func,
  filterHouse: PropTypes.string,
  handleFilterHouse: PropTypes.func
}

export default Filters