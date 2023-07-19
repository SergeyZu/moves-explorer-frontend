import { Link } from 'react-router-dom'
import './ProfileSave.css'
import Header from '../Header/Header'
import SaveButton from '../Buttons/SaveButton/SaveButton'

function ProfileSave() {
  return (
    <section className='profile'>
      <Header />
      <div className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!{}</h2>
        <div className='profile__input-block'>
          <label className='profile__label'>
            Имя
            <input className='profile__input' />
          </label>
          <label className='profile__label'>
            E-mail
            <input className='profile__input' />
          </label>
        </div>
        <span className='profile__span'>
          При обновлении профиля произошла ошибка
        </span>
        <div className='profile__button'>
          <SaveButton />
        </div>
        {/* <div className='profile__links'>
          <a className='profile__link profile__link_edit'>Редактировать</a>
          <Link to='/signin' className='profile__link profile__link_logout'>
            Выйти из аккаунта{' '}
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default ProfileSave
