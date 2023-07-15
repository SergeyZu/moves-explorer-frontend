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
            <a className='navigation__link' href='#'>
              Фильмы
            </a>
          </li>
          <li className='navigation__list-item'>
            <a className='navigation__link' href='#'>
              Сохраненные фильмы
            </a>
          </li>
        </ul>
      </div>
      <AccountButton />
    </nav>
  )
}

export default Navigation
