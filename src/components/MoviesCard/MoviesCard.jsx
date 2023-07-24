import { useState } from 'react'
import './MoviesCard.css'
import like from '../../images/like.svg'
import likeoff from '../../images/likeoff.svg'
import words from '../../images/33words.png'

function MoviesCard({ src, title, duration }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <li className='movies-card'>
        <img className='movies-card__image' src={src} alt={title} />
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>{title}</h2>
          <div className='movies-card__like'>
            <img
              className='movies-card__like-image'
              onClick={() => setIsLiked(!isLiked)}
              src={isLiked ? like : likeoff}
              alt='Переключатель'
            />
          </div>
          <p className='movies-card__duration'>{duration}</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
