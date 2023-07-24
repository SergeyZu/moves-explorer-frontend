import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__title'>
        <h2 className='about-project__title-text'>
          <a name='about-project'>О проекте</a>
        </h2>
        <div className='about-project__title-underline'></div>
      </div>
      <div className='about-project__content'>
        <div className='about-project__content-info'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className='about-project__content-info'>
          <h3 className='about-project__subtitle'>
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className='about-project__text'>
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
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
        <p className='about-project__scheme-theme'>Back-end</p>
        <p className='about-project__scheme-theme'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject
