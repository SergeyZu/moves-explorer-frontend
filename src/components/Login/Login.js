import FormAuth from '../FormAuth/FormAuth'

function Login() {
  return (
    <FormAuth
      title='Рады видеть!'
      buttonPath='/'
      buttonText='Войти'
      question='Ещё не зарегистрированы?'
      linkPath='/signup'
      linkText='Регистрация'
    />
  )
}

export default Login
