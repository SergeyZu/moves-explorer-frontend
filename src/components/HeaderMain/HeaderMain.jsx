import { Link } from 'react-router-dom'

import './HeaderMain.css'
import Logo from '../LogoButton/LogoButton'

function HeaderMain() {
  return (
    <header className='header-main'>
      <Logo />
      <nav className='header-main__auth-block'>
        <Link to='/signup' className='header-main__link'>
          Регистрация
        </Link>
        <Link to='/signin'>
          <button className='header-main__login-button'>Войти</button>
        </Link>
      </nav>
    </header>
  )
}

export default HeaderMain
