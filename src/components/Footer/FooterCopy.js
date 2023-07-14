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
              <a
                className='footer__link footer__practicum'
                href='https://practicum.yandex.ru'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__list-item '>
              <a
                className='footer__link footer__github'
                href='https://github.com/SergeyZu'
                target='_blank'
                rel='noreferrer'
              >
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
