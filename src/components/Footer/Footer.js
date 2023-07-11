import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__line'>
        <p className='footer__copyright'>
          © {new Date().getFullYear()} Moves Explorer
        </p>
        <nav className='footer__nav'>
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://practicum.yandex.ru'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://github.com/SergeyZu'>
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
