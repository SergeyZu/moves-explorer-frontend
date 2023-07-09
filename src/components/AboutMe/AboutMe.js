import './AboutMe.css'
import MainSubtitle from '../MainSubtitle/MainSubtitle'
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
  return (
    <section className='about-me'>
      <MainSubtitle subtitle='Студент' />
      <h3 className='about-me__subtitle'>Сергей</h3>
      <h4 className='about-me__subtitle-two'>Фронтенд-разработчик, 44 года</h4>
      <p className='about-me__text'>
        Я всегда интересовался компьютерами. В моем детстве их еще не было, но
        со студенческой скамьи и по настоящее время компьютер - мой постоянный
        спутник и помощник. До недавнего времени я, как и большинство людей был
        всего лишь пользователем ПК. Но вот мне захотелось узнать, как тут все
        устроено изнутри. Так я оказался на курсе "Фронтенд-разработчик" от
        Яндекс Практикума.
      </p>
      <a className='about-me__link' href='https://github.com/SergeyZu'>
        Github
      </a>
      <Portfolio />
    </section>
  )
}

export default AboutMe
