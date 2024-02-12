import PropTypes from "prop-types";

function FilterByHouse({ handleFilterHouse }) {

    const handleSelect = (ev) => {
        handleFilterHouse(ev.target.value)
    }
  return (
    <>
        <label className="form__label">Buscar por casa</label>
        <select name="house" id="house" className="form__input" onChange={handleSelect}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </>
    )
}

FilterByHouse.propTypes = {
    handleFilterHouse: PropTypes.func
}

export default FilterByHouse