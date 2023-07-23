import FormAuth from '../FormAuth/FormAuth'
import './Login.css'

function Login() {
  return (
    <main className='login'>
      <FormAuth
        title='Рады видеть!'
        buttonText='Войти'
        question='Ещё не зарегистрированы?'
        linkPath='/signup'
        linkText='Регистрация'
      >
        <label className='login__form-label'>
          E-mail
          <input
            className='login__form-input'
            type='email'
            placeholder='pochta@yandex.ru|'
            required
          />
        </label>
        <span className='login__form-error'>Что-то пошло не так...</span>
        <label className='login__form-label'>
          Пароль
          <input
            className='login__form-input'
            type='password'
            placeholder='******'
            required
          />
        </label>
        <span className='login__form-error'></span>
      </FormAuth>
    </main>
  )
}

export default Login
