import './Register.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import RegisterButton from '../Buttons/RegisterButton/RegisterButton'
import LoginLink from '../Buttons/LoginLink/LoginLink'

function Register() {
  return (
    <section className='register'>
      <LogoButton />
      <div className='register__form'>
        <h2 className='register__form_title'>Добро пожаловать!</h2>
        <div className='register__form_input-block'>
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
        </div>
        <div className='register__form_button-block'>
          <RegisterButton />
          <div className='register__form_button_question'>
            <p>Уже зарегистрированы?</p>
            <LoginLink />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
