import './SavedMoviesCard.css'

function SavedMoviesCard() {
  return (
    <>
      <li className='saved-movies-card'>
        <img className='saved-movies-card__image' alt='Кадр из фильма' />
        <div className='saved-movies-card__info'>
          <h2 className='saved-movies-card__title'>33 слова о дизайне</h2>
          <button className='saved-movies-card__delete-btn' />
          <p className='saved-movies-card__duration'>1ч 47м</p>
        </div>
      </li>
    </>
  )
}

export default SavedMoviesCard
