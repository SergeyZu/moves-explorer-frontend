import { Link } from 'react-router-dom'
import './Register.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import RegisterButton from '../Buttons/RegisterButton/RegisterButton'

function Register() {
  return (
    <section className='register'>
      <LogoButton />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <div className='register__form'>
        {/* <div className='register__form_input-block'> */}
        <label className='register__form_label'>
          Имя
          <input className='register__form_input' />
        </label>
        <label className='register__form_label'>
          E-mail
          <input className='register__form_input' />
        </label>
        <label className='register__form_label'>
          Пароль
          <input className='register__form_input' />
        </label>
        <span className='register__form_error'></span>
        {/* </div> */}
        <div className='register__form_button'>
          <RegisterButton />
        </div>
      </div>
      <div className='register__login-link'>
        <p className='register__question'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__link'>
          Войти{' '}
        </Link>
      </div>
    </section>
  )
}

export default Register
