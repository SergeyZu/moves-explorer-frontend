import './Techs.css'
import MainSubtitle from '../MainSubtitle/MainSubtitle'

function Techs() {
  return (
    <section className='techs'>
      <MainSubtitle subtitle='Технологии' />
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>Git</li>
        <li>Express.js</li>
        <li>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs
