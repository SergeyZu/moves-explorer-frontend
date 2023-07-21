import { Link } from 'react-router-dom'
import './FormAuth.css'
import LogoButton from '../LogoButton/LogoButton'

function FormAuth({
  title,
  // buttonPath,
  buttonText,
  question,
  linkPath,
  linkText,
  children,
}) {
  return (
    <section className='form-auth'>
      <div className='form-auth__container'>
        <div className='form-auth__box'>
          <div className='form-auth__logo'>
            <LogoButton />
          </div>
          <h2 className='form-auth__title'>{title}</h2>
          <div className='form-auth__form'>{children}</div>
        </div>
      </div>
      <div className='form-auth__form-footer'>
        <button className='form-auth__form_button'>{buttonText}</button>
        <div className='form-auth__qa'>
          <p className='form-auth__question'>{question}</p>
          <Link to={linkPath} className='form-auth__link'>
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FormAuth
