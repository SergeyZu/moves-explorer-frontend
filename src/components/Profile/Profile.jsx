import { useState } from 'react'
import './Profile.css'
import useForm from '../../hooks/useForm'
import Header from '../Header/Header'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useContext } from 'react'

function Profile({
  updateUserInfo,
  errorMessage,
  profileSuccessMessage,
  logOut,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext)

  const { form, errors, hadleChange, isFormValid } = useForm({
    name: currentUser.user.name,
    email: currentUser.user.email,
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
      <Header isLoggedIn={isLoggedIn} />
      <main className='profile'>
        <section className='profile__form'>
          <h2 className='profile__title'>Привет, {currentUser.user.name}!</h2>
          {!isEditPushed ? (
            <>
              <div className='profile__input-block'>
                <label className='profile__label'>
                  Имя
                  <p className='profile__input'>{currentUser.user.name}</p>
                </label>
                <label className='profile__label'>
                  E-mail
                  <p className='profile__input'>{currentUser.user.email}</p>
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
                <p
                  className='profile__link profile__link_logout '
                  onClick={logOut}
                >
                  Выйти из аккаунта
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
                    minLength={2}
                    maxLength={30}
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
              {isFormValid &&
              (currentUser.user.name !== form.name ||
                currentUser.user.email !== form.email) ? (
                <button className='profile__save-button'>Сохранить</button>
              ) : (
                <button
                  className='profile__save-button profile__save-button_disabled'
                  disabled
                >
                  Сохранить
                </button>
              )}

              <span className='profile__span_success'>
                {profileSuccessMessage}
              </span>
            </form>
          )}
        </section>
      </main>
    </>
  )
}

export default Profile
