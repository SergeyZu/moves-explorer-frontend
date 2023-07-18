import { Link } from 'react-router-dom'

import './LogoButton.css'
import logo from '../../../images/logo.svg'

function LogoButton() {
  return (
    <Link to='/'>
      <img className='logo-button' src={logo} alt='Логотип' />
    </Link>
  )
}

export default LogoButton
