// import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import FormAuth from '../FormAuth/FormAuth'
import './Login.css'

function Login({ loginUser, errorMessage, isLoggedIn }) {
  const { form, errors, hadleChange, isFormValid } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    loginUser(form)
  }

  return isLoggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='login'>
      <FormAuth
        title='Рады видеть!'
        buttonText='Войти'
        question='Ещё не зарегистрированы?'
        linkPath='/signup'
        linkText='Регистрация'
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isFormValid={isFormValid}
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
            placeholder='pochta@yandex.ru'
            required
          />
        </label>
        <span className='login__input-error'>{errors.email}</span>
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
        <span className='login__input-error'>{errors.password}</span>
      </FormAuth>
    </main>
  )
}

export default Login
