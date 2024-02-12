import PropTypes from "prop-types";

function FilterByCharacter( {filterCharacter, handleFilterCharacter} ) {

    const handleChange = (ev) => {
        handleFilterCharacter (ev.target.value);
    }
  return (
    <>
        <label className="form__label">
            Buscar por personaje
        </label>
        <input type="text" className="form__input" placeholder="Ej.: Harry Potter" value={filterCharacter} onChange={handleChange}/>
        
        
    </>
  )
}

FilterByCharacter.propTypes = {
  filterCharacter: PropTypes.string,
  handleFilterCharacter: PropTypes.func
}

export default FilterByCharacter