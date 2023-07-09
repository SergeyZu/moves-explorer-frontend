import './Navigation.css'

function Navigation() {
  return (
    <nav className='navigation'>
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
    </nav>
  )
}

export default Navigation
