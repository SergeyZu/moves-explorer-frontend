import './MoviesCard.css'
import words from '../../images/33words.png'

function MoviesCard() {
  return (
    <>
      <li className='movies-card'>
        <img className='movies-card__image' src={words} alt='Кадр из фильма' />
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <button className='movies-card__like' />
          <p className='movies-card__duration'>1ч 47м</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
