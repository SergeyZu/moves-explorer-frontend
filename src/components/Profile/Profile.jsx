import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import useForm from '../../hooks/useForm'
import Header from '../Header/Header'

function Profile({ userData, updateUserInfo, errorMessage, logOut }) {
  const { form, errors, hadleChange } = useForm({
    name: '',
    email: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    updateUserInfo(form)
  }

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
                {/* <Link
                  to='/'
                  className='profile__link profile__link_logout '
                  logOut={logOut}
                >
                  Выйти из аккаунта{' '}
                </Link> */}
                <p
                  className='profile__link profile__link_logout '
                  onClick={logOut}
                >
                  Выйти из аккаунта{' '}
                </p>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='profile__input-block'>
                <label className='profile__label'>
                  Имя
                  <input
                    className='profile__input'
                    type='text'
                    id='name'
                    name='name'
                    value={form.name}
                    onChange={hadleChange}
                    placeholder='Введите ваше имя'
                    required
                  />
                </label>
                <span className='profile__input-error'>{errors.name}</span>
                <label className='profile__label'>
                  E-mail
                  <input
                    className='profile__input'
                    type='email'
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={hadleChange}
                    placeholder='example@example.net'
                    required
                  />
                </label>
                <span className='profile__input-error'>{errors.email}</span>
              </div>
              <span className='profile__span'>{errorMessage}</span>
              <button className='profile__save-button'>Сохранить</button>
            </form>
          )}
        </section>
      </main>
    </>
  )
}

export default Profile
