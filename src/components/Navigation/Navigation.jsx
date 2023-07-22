import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import LogoButton from '../LogoButton/LogoButton'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='navigation'>
      <div className='navigation__box'>
        <div
          className={
            isOpen
              ? 'navigation__menu navigation__menu_active'
              : 'navigation__menu'
          }
        >
          <ul className='navigation__list'>
            <Link to='/' className='navigation__link'>
              <li className='navigation__list-item'>
                {isOpen ? 'Главная' : ''}
              </li>
            </Link>
            <Link to='/movies' className='navigation__link'>
              <li className='navigation__list-item'>Фильмы</li>
            </Link>
            <Link to='/saved-movies' className='navigation__link'>
              <li className='navigation__list-item'>Сохраненные фильмы</li>
            </Link>
          </ul>
          <Link to='/profile'>
            <button className='navigation__account-button'>Аккаунт</button>
          </Link>
        </div>
        <div className='navigation__burger' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <button className='navigation__close-button' />
          ) : (
            <button className='navigation__burger-button' />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
