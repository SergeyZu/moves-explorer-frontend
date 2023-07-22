import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import Header from '../Header/Header'

function Profile() {
  const [isEditPushed, setisEditPushed] = useState(false)

  const handleEditButtonClick = () => {
    setisEditPushed({ isEditPushed: true })
  }
  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__form'>
          <h2 className='profile__title'>Привет, Виталий!{}</h2>
          <div className='profile__input-block'>
            <label className='profile__label'>
              Имя
              {/* <input className='profile__input' /> */}
              <p className='profile__input'>Виталий</p>
            </label>
            <label className='profile__label'>
              E-mail
              {/* <input className='profile__input' /> */}
              <p className='profile__input'>pochta@yandex.ru</p>
            </label>
          </div>
          {!isEditPushed ? (
            <div className='profile__links'>
              {/* <Link
                to='/profile-save'
                className='profile__link profile__link_edit'
              >
                Редактировать
              </Link> */}
              <button
                className='profile__link profile__link_edit'
                type='button'
                onClick={handleEditButtonClick}
              >
                Редактировать
              </button>
              <Link to='/signin' className='profile__link profile__link_logout'>
                Выйти из аккаунта{' '}
              </Link>
            </div>
          ) : (
            <div className='profile__button-block'>
              <span className='profile__span'>
                При обновлении профиля произошла ошибка
              </span>
              <button className='profile__save-button'>Сохранить</button>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default Profile
