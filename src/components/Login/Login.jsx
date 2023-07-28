// import { useState } from 'react'
import useForm from '../../hooks/useForm'
import FormAuth from '../FormAuth/FormAuth'
import './Login.css'

function Login({ loginUser, errorMessage }) {
  const { form, errors, hadleChange } = useForm({
    email: '',
    password: '',
  })

  // const [form, setForm] = useState({
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
    // loginUser(form)
    console.log(form)
  }

  return (
    <main className='login'>
      <FormAuth
        title='Рады видеть!'
        buttonText='Войти'
        question='Ещё не зарегистрированы?'
        linkPath='/signup'
        linkText='Регистрация'
        onSubmit={handleSubmit}
      >
        <label className='login__form-label'>
          E-mail
          <input
            className='login__form-input'
            type='email'
            id='email'
            name='email'
            value={form.email}
            onChange={hadleChange}
            placeholder='pochta@yandex.ru|'
            required
          />
        </label>
        <span className='login__form-error'>{errorMessage}</span>
        <label className='login__form-label'>
          Пароль
          <input
            className='login__form-input'
            type='password'
            id='password'
            name='password'
            value={form.password}
            onChange={hadleChange}
            placeholder='******'
            required
          />
        </label>
        <span className='login__form-error'>{errorMessage}</span>
      </FormAuth>
    </main>
  )
}

export default Login
