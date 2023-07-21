import { Link } from 'react-router-dom'

import './HeaderMain.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import LoginMainButton from '../Buttons/LoginMainButton/LoginMainButton'

function HeaderMain() {
  return (
    <header className='header-main'>
      <Logo />
      <nav className='header-main__auth-block'>
        <Link to='/signup' className='header-main__link'>
          Регистрация
        </Link>

        <LoginMainButton />
      </nav>
    </header>
  )
}

export default HeaderMain
