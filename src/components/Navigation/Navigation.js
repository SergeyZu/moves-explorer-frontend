import { Link } from 'react-router-dom'
import './Navigation.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import AccountButton from '../Buttons/AccountButton/AccountButton'

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='navigation__left'>
        <LogoButton />
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <Link to='/movies' className='navigation__link'>
              Фильмы
            </Link>
          </li>
          <li className='navigation__list-item'>
            <Link to='/saved-movies' className='navigation__link'>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
      </div>
      <AccountButton />
    </nav>
  )
}

export default Navigation
