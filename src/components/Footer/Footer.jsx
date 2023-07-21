import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      {/* <div className='footer__line'> */}
      {/* <nav className='footer__nav'> */}
      <ul className='footer__list'>
        <li className='footer__list-item footer__practicum'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className='footer__list-item footer__github'>
          <a
            className='footer__link'
            href='https://github.com/SergeyZu'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
        <li className='footer__list-item footer__copyright'>
          <p className='footer__copyright'>
            © {new Date().getFullYear()} Moves Explorer
          </p>
        </li>
      </ul>
      {/* </nav> */}
      {/* </div> */}
    </footer>
  )
}

export default Footer
