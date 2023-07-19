import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import LogoButton from '../Buttons/LogoButton/LogoButton'
import AccountButton from '../Buttons/AccountButton/AccountButton'
import BurgerButton from '../Buttons/BurgerButton/BurgerButton'
import CloseButton from '../Buttons/CloseButton/CloseButton'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <div className='navigation__box'>
          <ul
            className={
              isOpen
                ? 'navigation__list navigation__list_active'
                : 'navigation__list'
            }
          >
            <li className='navigation__list-item'>Главная</li>
            <li className='navigation__list-item'>Фильмы</li>
            <li className='navigation__list-item'>Сохраненные фильмы</li>
            <li className='navigation__list-item'>Аккаунт</li>
          </ul>
          <div
            className='navigation__burger'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseButton /> : <BurgerButton />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
