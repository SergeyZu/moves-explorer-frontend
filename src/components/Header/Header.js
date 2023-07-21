import './Header.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import Navigation from '../Navigation/Navigation'
import AccountButton from '../Buttons/AccountButton/AccountButton'

function Header() {
  return (
    <header className='header'>
      <div>
        <Logo className='header__logo' />
      </div>
      <div className='header__navigation'>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
