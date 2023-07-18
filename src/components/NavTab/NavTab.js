import { Link } from 'react-router-dom'
import './NavTab.css'

function NavTab() {
  return (
    <nav className='navtab'>
      <Link to='/'>
        <button className='navtab__button'>О проекте</button>
      </Link>

      <button className='navtab__button'>Технологии</button>
      <button className='navtab__button'>Студент</button>
    </nav>
  )
}

export default NavTab
