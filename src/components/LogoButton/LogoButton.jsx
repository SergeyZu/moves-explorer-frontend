import { Link } from 'react-router-dom'

import './LogoButton.css'

function LogoButton() {
  return (
    <Link to='/'>
      <button className='logo-button' />
    </Link>
  )
}

export default LogoButton
