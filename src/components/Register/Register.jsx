import { useState } from 'react'
import useForm from '../../hooks/useForm'
import FormAuth from '../FormAuth/FormAuth'
import './Register.css'

function Register({ registerUser, errorMessage }) {
  const { form, hadleChange } = useForm({
    name: '',
    email: '',
    password: '',
  })

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // })

  // const hadleChange = (evt) => {
  //   const input = evt.target

  //   setForm({
  //     ...form,
  //     [input.name]: input.value,
  //   })
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // registerUser(form)
    console.log(form)
  }

  return (
    <main className='register'>
      <FormAuth
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        question='Уже зарегистрированы?'
        linkPath='/signin'
        linkText='Войти'
        onSubmit={handleSubmit}
      >
        <label className='register__form-label'>
          Имя
          <input
            className='register__form-input'
            type='text'
            id='name'
            name='name'
            value={form.name}
            onChange={hadleChange}
            placeholder='Виталий'
            required
          />
        </label>
        <span className='register__form-error'>{errorMessage}</span>
        <label className='register__form-label'>
          E-mail
          <input
            className='register__form-input'
            type='email'
            id='email'
            name='email'
            value={form.email}
            onChange={hadleChange}
            placeholder='pochta@yandex.ru|'
            required
          />
        </label>
        <span className='register__form-error'>{errorMessage}</span>
        <label className='register__form-label'>
          Пароль
          <input
            className='register__form-input'
            type='password'
            id='password'
            name='password'
            value={form.password}
            onChange={hadleChange}
            placeholder='******'
            required
          />
        </label>
        <span className='register__form-error'>{errorMessage}</span>
      </FormAuth>
    </main>
  )
}

export default Register
