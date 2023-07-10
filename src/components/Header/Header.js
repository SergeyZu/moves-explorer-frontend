import './Header.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import Navigation from '../Navigation/Navigation'
import AccountButton from '../Buttons/AccountButton/AccountButton'

function Header() {
  return (
    <header className='header'>
      <div className='header__navigation'>
        <Logo />
        <Navigation />
      </div>
      <AccountButton />
    </header>
  )
}

export default Header
