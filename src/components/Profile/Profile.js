import './Profile.css'
import Header from '../Header/Header'
import EditButton from '../Buttons/EditButton/EditButton'
import LogoutButton from '../Buttons/LogoutButton/LogoutButton'

function Profile() {
  return (
    <section className='profile'>
      <Header />
      <div className='profile__form'>
        <h2 className='profile__form_title'>Привет, {}</h2>
        <div className='profile__form_input-block'>
          <label className='profile__form_label'>
            Имя
            <input className='profile__form_input' />
          </label>
          <label className='profile__form_label'>
            E-mail
            <input className='profile__form_input' />
          </label>
        </div>
        <div className='profile__form_button-block'>
          <EditButton />
          <LogoutButton />
        </div>
      </div>
    </section>
  )
}

export default Profile
