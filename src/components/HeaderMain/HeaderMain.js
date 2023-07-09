import './HeaderMain.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import RegisterLink from '../Buttons/RegisterLink/RegisterLink'
import LoginMainButton from '../Buttons/LoginMainButton/LoginMainButton'

function HeaderMain() {
  return (
    <header className='header'>
      <Logo />
      <RegisterLink />
      <LoginMainButton />
    </header>
  )
}

export default HeaderMain
