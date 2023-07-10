import './Login.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import LoginButton from '../Buttons/LoginButton/LoginButton'
import RegisterLink from '../Buttons/RegisterLink/RegisterLink'

function Login() {
  return (
    <section className='login'>
      <LogoButton />
      <div className='login__form'>
        <h2 className='login__form_title'>Рады видеть!</h2>
        <div className='login__form_input-block'>
          <label className='login__form_label'>
            E-mail
            <input className='login__form_input' />
          </label>
          <label className='login__form_label'>
            Пароль
            <input className='login__form_input' />
          </label>
          <span className='login__form_error'></span>
        </div>
        <div className='login__form_button-block'>
          <LoginButton />
          <div className='login__form_button_question'>
            <p>Ещё не зарегистрированы?</p>
            <RegisterLink />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
