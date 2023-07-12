import './PageNotFound.css'

function PageNotFound() {
  return (
    <section className='page-not-found'>
      <h2 className='page-not-found__err-code'>404</h2>
      <p className='page-not-found__err-msg'>Страница не найдена</p>
      <a className='page-not-found__link' href=''>
        Назад
      </a>
    </section>
  )
}

export default PageNotFound
