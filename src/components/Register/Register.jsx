import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import FormAuth from '../FormAuth/FormAuth'
import './Register.css'

function Register({ registerUser, errorMessage, isLoggedIn }) {
  const { form, errors, hadleChange, isFormValid } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    registerUser(form)
  }

  return isLoggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='register'>
      <FormAuth
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        question='Уже зарегистрированы?'
        linkPath='/signin'
        linkText='Войти'
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isFormValid={isFormValid}
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
            placeholder='Введите ваше имя'
            minLength={2}
            maxLength={30}
            required
          />
        </label>
        <span className='register__input-error'>{errors.name}</span>
        <label className='register__form-label'>
          E-mail
          <input
            className='register__form-input'
            type='email'
            id='email'
            name='email'
            value={form.email}
            onChange={hadleChange}
            placeholder='pochta@yandex.ru'
            required
          />
        </label>
        <span className='register__input-error'>{errors.email}</span>
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
            minLength={3}
            required
          />
        </label>
        <span className='register__input-error'>{errors.password}</span>
      </FormAuth>
    </main>
  )
}

export default Register
