import FormAuth from '../FormAuth/FormAuth'
import './Register.css'

function Register() {
  return (
    <FormAuth
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      linkPath='/signin'
      linkText='Войти'
    >
      <label className='register__form_label'>
        Имя
        <input
          className='register__form_input'
          type='text'
          placeholder='Виталий'
          required
        />
      </label>
      <span className='register__form_error'>Что-то пошло не так...</span>
      <label className='register__form_label'>
        E-mail
        <input
          className='register__form_input'
          type='email'
          placeholder='pochta@yandex.ru|'
          required
        />
      </label>
      <span className='register__form_error'>Что-то пошло не так...</span>
      <label className='register__form_label'>
        Пароль
        <input
          className='register__form_input'
          type='password'
          placeholder='******'
          required
        />
      </label>
      <span className='register__form_error'></span>
    </FormAuth>
  )
}

export default Register
