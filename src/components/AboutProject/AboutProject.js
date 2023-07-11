import './AboutProject.css'
import MainSubtitle from '../MainSubtitle/MainSubtitle'

function AboutProject() {
  return (
    <section className='about-project'>
      <MainSubtitle subtitle='О проекте' />
      <div className='about-project__info-block'>
        <div className='about-project__info'>
          <h3 className='about-project__info_subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info_text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__info'>
          <h3 className='about-project__info_subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info_text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__scheme'>
        <p className='about-project__scheme-color about-project__scheme-color_green'>
          1 неделя
        </p>
        <p className='about-project__scheme-color about-project__scheme-color_grey'>
          4 недели
        </p>
        <p className='about-project__scheme_theme'>Back-end</p>
        <p className='about-project__scheme_theme'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject
