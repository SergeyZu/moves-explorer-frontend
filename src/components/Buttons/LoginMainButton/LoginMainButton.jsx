import { Link } from 'react-router-dom'
import './LoginMainButton.css'

function LoginMainButton() {
  return (
    <Link to='/signin'>
      <button className='login-main-button'>Войти</button>
    </Link>
  )
}

export default LoginMainButton
