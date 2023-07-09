import './AboutProject.css'
import MainSubtitle from '../MainSubtitle/MainSubtitle'

function AboutProject() {
  return (
    <section className='about-project'>
      <MainSubtitle subtitle='О проекте' />
      <ul className='about-project__text-content'>
        <li className='about-project__text-block'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__text-block'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__graph-content'>
        <p className='about-project__colored-cell_first'>1 неделя</p>
        <p className='about-project__uncolored-cell'>Back-end</p>
        <p className='about-project__colored-cell_second'>4 недели</p>
        <p className='about-project__uncolored-cell'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject
