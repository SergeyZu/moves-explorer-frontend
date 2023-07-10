import './FilterCheckbox.css'
import checkbox from '../../images/checkbox.svg'

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <img className='checkbox__image' src={checkbox} alt='Переключатель' />
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
