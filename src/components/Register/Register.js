import FormAuth from '../FormAuth/FormAuth'

function Register() {
  return (
    <FormAuth
      title='Добро пожаловать!'
      buttonPath='/signup'
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      linkPath='/'
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
      <span className='register__form_error'></span>
    </FormAuth>
  )
}

export default Register
