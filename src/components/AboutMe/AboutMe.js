import './AboutMe.css'
import myphoto from '../../images/my-photo.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='main__subtitle'>
        <h2 className='main__subtitle__text'>
          <a name='student'>Студент</a>
        </h2>
        <div className='main__subtitle__underline'></div>
      </div>{' '}
      <div className='about-me__content'>
        <div className='about-me__column'>
          <div className='about-me__text-block'>
            <h3 className='about-me__title'>Сергей</h3>
            <h4 className='about-me__subtitle'>
              Фронтенд-разработчик, 44 года
            </h4>
            <p className='about-me__text'>
              Я всегда интересовался компьютерами. В моем детстве это было
              что-то из области фантастики. Но со студенческой скамьи и по
              настоящее время компьютер - мой постоянный спутник и помощник. До
              недавнего времени я, как и большинство людей был всего лишь
              пользователем ПК. Но вот мне захотелось узнать, как тут все
              устроено изнутри. Так я оказался на курсе "Фронтенд-разработчик"
              от Яндекс Практикума.
            </p>
          </div>
          <a
            className='about-me__link'
            href='https://github.com/SergeyZu'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__photo' src={myphoto} alt='Фото' />
      </div>
    </section>
  )
}

export default AboutMe
