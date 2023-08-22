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
  onSubmit,
  errorMessage,
  children,
  isFormValid,
}) {
  
  return (
    <form className='form-auth' onSubmit={onSubmit}>
      <div className='form-auth__container'>
        <div className='form-auth__box'>
          <div className='form-auth__logo'>
            <LogoButton />
          </div>
          <h1 className='form-auth__title'>{title}</h1>
          <div className='form-auth__form'>{children}</div>
        </div>
      </div>
      <div className='form-auth__form-footer'>
        <span className='form-auth__error-message'>{errorMessage}</span>
        {isFormValid ? (
          <button className='form-auth__form-button'>{buttonText}</button>
        ) : (
          <button
            className='form-auth__form-button
          form-auth__form-button_disabled'
            disabled
          >
            {buttonText}
          </button>
        )}

        <div className='form-auth__qa'>
          <p className='form-auth__question'>{question}</p>
          <Link to={linkPath} className='form-auth__link'>
            {linkText}
          </Link>
        </div>
      </div>
    </form>
  )
}

export default FormAuth
