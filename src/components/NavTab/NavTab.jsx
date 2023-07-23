import './NavTab.css'

function NavTab() {
  return (
    <nav className='navtab'>
      <a className='navtab__anchor' href='#about-project'>
        <button className='navtab__button'>О проекте</button>
      </a>
      <a className='navtab__anchor' href='#techs'>
        <button className='navtab__button'>Технологии</button>
      </a>
      <a className='navtab__anchor' href='#student'>
        <button className='navtab__button'>Студент</button>
      </a>
    </nav>
  )
}

export default NavTab
