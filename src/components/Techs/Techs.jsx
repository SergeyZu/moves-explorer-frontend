import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__title'>
        <h2 className='techs__title-text'>
          <a name='techs'>Технологии</a>
        </h2>
        <div className='techs__title-underline'></div>
      </div>{' '}
      <div className='techs__content'>
        <h3 className='techs__subtitle'>7&nbsp;технологий</h3>
        <p className='techs__text'>
          На&nbsp;курсе веб-разработки мы освоили технологии, которые применили
          в дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs
