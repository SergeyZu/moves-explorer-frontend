import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../LogoButton/LogoButton'
import Navigation from '../Navigation/Navigation'

function Header({ isLoggedIn }) {
  return (
    <header className='header'>
      <Logo className='header__logo' />
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <nav className='header__auth-block'>
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
          <Link to='/signin'>
            <button className='header__login-button'>Войти</button>
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
