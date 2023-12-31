import './Promo.css'
import NavTab from '../NavTab/NavTab'

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <div className='promo__navtab'>
        <NavTab />
      </div>
    </section>
  )
}

export default Promo
