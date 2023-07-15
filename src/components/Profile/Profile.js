import './Profile.css'
import Header from '../Header/Header'

function Profile() {
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
        <div className='profile__links'>
          <a className='profile__link profile__link_edit'>Редактировать</a>
          <a className='profile__link profile__link_logout'>
            Выйти из аккаунта
          </a>
        </div>
      </div>
    </section>
  )
}

export default Profile
