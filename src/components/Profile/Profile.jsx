import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import Header from '../Header/Header'

function Profile({ userData }) {
  const [isEditPushed, setisEditPushed] = useState(false)

  const handleEditButtonClick = () => {
    setisEditPushed({ isEditPushed: true })
  }
  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__form'>
          <h2 className='profile__title'>Привет, {userData.user.name}!</h2>
          {!isEditPushed ? (
            <>
              <div className='profile__input-block'>
                <label className='profile__label'>
                  Имя
                  <p className='profile__input'>{userData.user.name}</p>
                </label>
                <label className='profile__label'>
                  E-mail
                  <p className='profile__input'>{userData.user.email}</p>
                </label>
              </div>

              <div className='profile__links'>
                <button
                  className='profile__link profile__link_edit'
                  type='button'
                  onClick={handleEditButtonClick}
                >
                  Редактировать
                </button>
                <Link
                  to='/signin'
                  className='profile__link profile__link_logout'
                >
                  Выйти из аккаунта{' '}
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='profile__input-block'>
                <label className='profile__label'>
                  Имя
                  <input
                    className='profile__input'
                    type='text'
                    placeholder='Введите ваше имя'
                    required
                  />
                </label>
                <label className='profile__label'>
                  E-mail
                  <input
                    className='profile__input'
                    type='email'
                    placeholder='example@example.net'
                    required
                  />
                </label>
              </div>
              <span className='profile__span'>
                При обновлении профиля произошла ошибка
              </span>
              <button className='profile__save-button'>Сохранить</button>
            </>
          )}
        </section>
      </main>
    </>
  )
}

export default Profile
