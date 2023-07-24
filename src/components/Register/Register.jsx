import FormAuth from '../FormAuth/FormAuth'
import './Register.css'

function Register() {
  return (
    <main className='register'>
      <FormAuth
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        question='Уже зарегистрированы?'
        linkPath='/signin'
        linkText='Войти'
      >
        <label className='register__form-label'>
          Имя
          <input
            className='register__form-input'
            type='text'
            placeholder='Виталий'
            required
          />
        </label>
        <span className='register__form-error'>Что-то пошло не так...</span>
        <label className='register__form-label'>
          E-mail
          <input
            className='register__form-input'
            type='email'
            placeholder='pochta@yandex.ru|'
            required
          />
        </label>
        <span className='register__form-error'>Что-то пошло не так...</span>
        <label className='register__form-label'>
          Пароль
          <input
            className='register__form-input'
            type='password'
            placeholder='******'
            required
          />
        </label>
        <span className='register__form-error'></span>
      </FormAuth>
    </main>
  )
}

export default Register
