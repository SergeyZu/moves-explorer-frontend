import './NavTab.css'

function NavTab() {
  return (
    <nav className='navtab'>
      <a className='navtab__anchor' href='#about-project'>
        О проекте
        {/* <button className='navtab__button'>О проекте</button> */}
      </a>
      <a className='navtab__anchor' href='#techs'>
        Технологии
        {/* <button className='navtab__button'>Технологии</button> */}
      </a>
      <a className='navtab__anchor' href='#student'>
        Студент
        {/* <button className='navtab__button'>Студент</button> */}
      </a>
    </nav>
  )
}

export default NavTab
