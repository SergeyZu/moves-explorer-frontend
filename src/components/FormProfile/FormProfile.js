import { Link } from 'react-router-dom'
import './Profile.css'
// import Header from '../Header/Header'

function Profile({ title }) {
  return (
    <section className='profile'>
      {/* <Header /> */}
      <div className='profile__form'>
        <h2 className='profile__title'>{title}</h2>
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
        <div className='profile__links'>
          <Link to='/profile-save' className='profile__link profile__link_edit'>
            Редактировать
          </Link>

          <Link to='/signin' className='profile__link profile__link_logout'>
            Выйти из аккаунта{' '}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Profile
