import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://sergeyzu.github.io/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            <h4 className='portfolio__link-text'>Статичный сайт</h4>
            <h4 className='portfolio__link-symbol'>↗</h4>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://sergeyzu.github.io/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            <h4 className='portfolio__link-text'>Адаптивный сайт</h4>
            <h4 className='portfolio__link-symbol'>↗</h4>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://sergeyzu.github.io/react-mesto-auth'
            target='_blank'
            rel='noreferrer'
          >
            <h4 className='portfolio__link-text'>Одностраничное приложение</h4>
            <h4 className='portfolio__link-symbol'>↗</h4>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
