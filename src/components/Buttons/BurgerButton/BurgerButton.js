import './BurgerButton.css'
import burger from '../../../images/burger.svg'

function BurgerButton() {
  return <img className='burger-button' src={burger} alt='Кнопка бургер-меню' />
}

export default BurgerButton
