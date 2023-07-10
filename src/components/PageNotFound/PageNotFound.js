import './PageNotFound.css'
import BackLink from '../Buttons/BackLink/BackLink'

function PageNotFound() {
  return (
    <section className='page-not-found'>
      <div>
        <h2>404</h2>
        <p>Страница не найдена</p>
      </div>
      <BackLink />
    </section>
  )
}

export default PageNotFound
