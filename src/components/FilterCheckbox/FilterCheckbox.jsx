import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'
import checkboxoff from '../../images/checkboxoff.svg'

// function FilterCheckbox({ isFilterOn, setIsFilterOn }) {

function FilterCheckbox({ isFilterOn, onChangeShortFilmToggle }) {
  return (
    <div className='filter-checkbox'>
      <img
        className='filter-checkbox__image'
        // onClick={() => setIsFilterOn(!isFilterOn)}
        onClick={onChangeShortFilmToggle}
        src={isFilterOn ? checkbox : checkboxoff}
        alt='Переключатель'
      />
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
