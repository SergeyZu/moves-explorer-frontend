import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'
import checkboxoff from '../../images/checkboxoff.svg'
// import { useState } from 'react'

function FilterCheckbox({ isFilterOn, setIsFilterOn }) {
  // // const [isFilterOn, setIsFilterOn] = useState(false)
  // localStorage.setItem('isShortFilm', isFilterOn)
  return (
    <div className='filter-checkbox'>
      <img
        className='filter-checkbox__image'
        onClick={() => setIsFilterOn(!isFilterOn)}
        src={isFilterOn ? checkbox : checkboxoff}
        alt='Переключатель'
      />
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
