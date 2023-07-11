import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <img
        className='filter-checkbox__image'
        src={checkbox}
        alt='Переключатель'
      />
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
