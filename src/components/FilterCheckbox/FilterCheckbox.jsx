import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'
import checkboxoff from '../../images/checkboxoff.svg'
import { useState } from 'react'

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='filter-checkbox'>
      <img
        className='filter-checkbox__image'
        onClick={() => setIsChecked(!isChecked)}
        src={isChecked ? checkbox : checkboxoff}
        alt='Переключатель'
      />
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
