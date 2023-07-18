import { Link } from 'react-router-dom'
import './Login.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import LoginButton from '../Buttons/LoginButton/LoginButton'

function Login() {
  return (
    <section className='login'>
      <LogoButton />
      <h2 className='login__title'>Рады видеть!</h2>
      <div className='login__form'>
        {/* <div className='login__form_input-block'> */}
        <label className='login__form_label'>
          E-mail
          <input className='login__form_input' />
        </label>
        <label className='login__form_label'>
          Пароль
          <input className='login__form_input' />
        </label>
        <span className='login__form_error'></span>
        {/* </div> */}
        <div className='login__form_button'>
          <LoginButton />
        </div>
      </div>
      <div className='login__register-link'>
        <p className='login__question'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__link'>
          Регистрация{' '}
        </Link>
      </div>
    </section>
  )
}

export default Login
