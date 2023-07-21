import { Link } from 'react-router-dom'
import './ProfileSave.css'
import Header from '../Header/Header'
import SaveButton from '../Buttons/SaveButton/SaveButton'

function ProfileSave() {
  return (
    <>
      <Header />
      <main className='profile-save'>
        <section className='profile-save__form'>
          <h2 className='profile-save__title'>Привет, Виталий!{}</h2>
          <div className='profile-save__input-block'>
            <label className='profile-save__label'>
              Имя
              <input
                className='profile-save__input'
                type='text'
                placeholder='Введите ваше имя'
                required
              />
            </label>
            <label className='profile-save__label'>
              E-mail
              <input
                className='profile-save__input'
                type='email'
                placeholder='example@example.net'
                required
              />
            </label>
          </div>
          <span className='profile-save__span'>
            При обновлении профиля произошла ошибка
          </span>
          <div className='profile-save__button'>
            <SaveButton />
          </div>
          {/* <div className='profile-save__links'>
          <a className='profile-save__link profile-save__link_edit'>Редактировать</a>
          <Link to='/signin' className='profile-save__link profile-save__link_logout'>
            Выйти из аккаунта{' '}
          </Link>
        </div> */}
        </section>
      </main>
    </>
  )
}

export default ProfileSave
