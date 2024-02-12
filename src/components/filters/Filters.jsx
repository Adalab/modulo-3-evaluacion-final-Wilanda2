import FilterByCharacter from "./FilterByCharacter"
import FilterByGender from "./FilterByGender";
import FilterByHouse from "./FilterByHouse"
import PropTypes from "prop-types";

function Filters({ filterCharacter, handleFilterCharacter, handleFilterHouse, filterGender, handleFilterGender }) {
  return (
    <form className="form">
      <FilterByCharacter filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} handleFilterHouse={handleFilterHouse}/>
      <FilterByHouse handleFilterHouse={handleFilterHouse}/>
      <FilterByGender filterGender={filterGender} handleFilterGender={handleFilterGender}/>
    </form>
  )
}

Filters.propTypes = {
  filterCharacter: PropTypes.string,
  handleFilterCharacter: PropTypes.func,
  filterHouse: PropTypes.string,
  handleFilterHouse: PropTypes.func,
  filterGender: PropTypes.string,
  handleFilterGender: PropTypes.func
}

export default Filters