import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'
import checkboxoff from '../../images/checkboxoff.svg'
import { useState } from 'react'

function FilterCheckbox() {
  const [isOn, setIsOn] = useState(true)
  return (
    <div className='filter-checkbox' type={checkbox}>
      <img
        className='filter-checkbox__image'
        onClick={() => setIsOn(!isOn)}
        src={isOn ? checkbox : checkboxoff}
        alt='Переключатель'
      />
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
