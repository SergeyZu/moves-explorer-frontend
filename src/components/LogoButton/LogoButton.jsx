import { Link } from 'react-router-dom'

import './LogoButton.css'

function LogoButton() {
  return (
    <Link to='/'>
      <div className='logo-button' />
    </Link>
  )
}

export default LogoButton
