import './HeaderMain.css'
import Logo from '../Buttons/LogoButton/LogoButton'
import LoginMainButton from '../Buttons/LoginMainButton/LoginMainButton'

function HeaderMain() {
  return (
    <header className='header-main'>
      <Logo />
      <div className='header-main__auth-block'>
        <a className='header-main__link' href='#'>
          Регистрация
        </a>
        <LoginMainButton />
      </div>
    </header>
  )
}

export default HeaderMain
