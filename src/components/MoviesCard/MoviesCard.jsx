import { useState } from 'react'
import './MoviesCard.css'

function MoviesCard({ src, title, duration }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <li className='movies-card'>
        <img
          className='movies-card__image'
          src={`https://api.nomoreparties.co${src}`}
          alt={title}
        />
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>{title}</h2>
          <div className='movies-card__like'>
            <button
              className={
                isLiked
                  ? 'movies-card__like-button_clicked'
                  : 'movies-card__like-button'
              }
              type='button'
              onClick={() => setIsLiked(!isLiked)}
            />
          </div>
          <p className='movies-card__duration'>{duration}</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
