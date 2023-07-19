import './Header.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import Navigation from '../Navigation/Navigation'
import AccountButton from '../Buttons/AccountButton/AccountButton'

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
