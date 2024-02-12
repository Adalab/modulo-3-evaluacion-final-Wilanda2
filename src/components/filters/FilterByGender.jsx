import PropTypes from "prop-types";

function FilterByGender({ filterGender, handleFilterGender }) {

    const handleRadio = (ev) => {
        handleFilterGender(ev.target.value)
    }
  return (
    <>
    <fieldset>
        <label className="form__label">Buscar por género:</label>
        <label className="form__radio">Hombre</label>
        <input type="radio" name="gender" value = "male" onChange={handleRadio} checked={filterGender === "male"} className="form__radio--circle"/>
        <label className="form__radio">Mujer</label>
        <input type="radio" name="gender" value = "female" onChange={handleRadio} checked={filterGender === "female"} className="form__radio--circle" />
    </fieldset>
    </>
  )
}

FilterByGender.propTypes = {
    filterGender: PropTypes.string,
    handleFilterGender: PropTypes.func
  }


export default FilterByGender