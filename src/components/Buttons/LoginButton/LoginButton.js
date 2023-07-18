import { Link } from 'react-router-dom'
import './LoginButton.css'

function LoginButton() {
  return (
    <Link to='/'>
      <button className='login-button'>Войти</button>{' '}
    </Link>
  )
}

export default LoginButton
