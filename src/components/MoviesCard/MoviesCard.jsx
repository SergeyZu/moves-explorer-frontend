import { useState } from 'react'
import './MoviesCard.css'
// import like from '../../images/like.svg'
// import likeoff from '../../images/likeoff.svg'

function MoviesCard(movieData) {
  const { src, title, duration } = movieData
  // function MoviesCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <li className='movies-card'>
        {/* <img className='movies-card__image' src={movie.src} alt={movie.title} /> */}
        <img
          className='movies-card__image'
          src={`https://api.nomoreparties.co${src}`}
          alt={title}
        />

        <div className='movies-card__info'>
          {/* <h2 className='movies-card__title'>{movie.title}</h2> */}
          <h2 className='movies-card__title'>{title}</h2>

          {/* <div className='movies-card__like'>
            <img
              className='movies-card__like-image'
              onClick={() => setIsLiked(!isLiked)}
              src={isLiked ? like : likeoff}
              alt='Переключатель'
            />
          </div> */}

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

          {/* <p className='movies-card__duration'>{movie.duration}</p> */}
          <p className='movies-card__duration'>{duration}</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
