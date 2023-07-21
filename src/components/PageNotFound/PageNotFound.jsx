import { useNavigate } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <main className='page-not-found'>
      <h1 className='page-not-found__err-code'>404</h1>
      <p className='page-not-found__err-msg'>Страница не найдена</p>
      <a className='page-not-found__link' onClick={goBack}>
        Назад
      </a>
    </main>
  )
}

export default PageNotFound
