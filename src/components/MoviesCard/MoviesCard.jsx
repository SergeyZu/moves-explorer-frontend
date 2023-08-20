import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MoviesCard.css'
import convertDuration from '../../utils/convertDuration'

function MoviesCard({
  src,
  title,
  duration,
  trailerLink,
  movie,
  createCard,
  deleteCard,
}) {
  const [isLiked, setIsLiked] = useState(false)
  const location = useLocation()

  const convertedDuration = convertDuration(duration)

  const likeMovie = () => {
    setIsLiked(true)
    createCard(movie)
  }

  const deleteMovie = () => {
    setIsLiked(false)
    deleteCard(movie)
  }

  return (
    <>
      <li className='movies-card'>
        <Link to={trailerLink} target='_blank'>
          <img
            className='movies-card__image'
            src={`https://api.nomoreparties.co${src}`}
            alt={title}
          />
        </Link>

        <div className='movies-card__info'>
          <h2 className='movies-card__title'>{title}</h2>
          {location.pathname === '/movies' ? (
            <div className='movies-card__like'>
              {isLiked ? (
                <button
                  className='movies-card__like-button_clicked'
                  type='button'
                  onClick={deleteMovie}
                />
              ) : (
                <button
                  className='movies-card__like-button'
                  type='button'
                  onClick={likeMovie}
                />
              )}
            </div>
          ) : (
            <div className='movies-card__like'>
              <button
                className='movies-card__delete-btn'
                type='button'
                onClick={deleteMovie}
              />
            </div>
          )}

          <p className='movies-card__duration'>{convertedDuration}</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
