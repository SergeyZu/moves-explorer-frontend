import FormAuth from '../FormAuth/FormAuth'
import './Login.css'

function Login() {
  return (
    <FormAuth
      title='Рады видеть!'
      buttonText='Войти'
      question='Ещё не зарегистрированы?'
      linkPath='/signup'
      linkText='Регистрация'
    >
      <label className='login__form_label'>
        E-mail
        <input
          className='login__form_input'
          type='email'
          placeholder='pochta@yandex.ru|'
          required
        />
      </label>
      <span className='login__form_error'>Что-то пошло не так...</span>
      <label className='login__form_label'>
        Пароль
        <input
          className='login__form_input'
          type='password'
          placeholder='******'
          required
        />
      </label>
      <span className='login__form_error'></span>
    </FormAuth>
  )
}

export default Login
