import { useState } from 'react'
import './MoviesCard.css'
import like from '../../images/like.svg'
import likeoff from '../../images/likeoff.svg'
import words from '../../images/33words.png'

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <li className='movies-card'>
        <img className='movies-card__image' src={words} alt='Кадр из фильма' />
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <div className='movies-card__like'>
            <img
              className='movies-card__like-image'
              onClick={() => setIsLiked(!isLiked)}
              src={isLiked ? like : likeoff}
              alt='Переключатель'
            />
          </div>
          <p className='movies-card__duration'>1ч 47м</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
