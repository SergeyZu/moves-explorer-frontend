import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MoviesCard.css'
import convertDuration from '../../utils/convertDuration'

function MoviesCard({ src, title, duration, trailerLink }) {
  const [isLiked, setIsLiked] = useState(false)

  const convertedDuration = convertDuration(duration)

  // const handleLikeClick = () => {
  //   !isLiked ? addCardToLiked() : removeCardFromLiked()
  //   // setIsLiked(!isLiked)
  // }

  const addCardToLiked = () => {
    setIsLiked(true)
  }

  const removeCardFromLiked = () => {
    setIsLiked(false)
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
          <div className='movies-card__like'>
            {isLiked ? (
              <button
                className='movies-card__like-button_clicked'
                type='button'
                onClick={removeCardFromLiked}
              />
            ) : (
              <button
                className='movies-card__like-button'
                type='button'
                onClick={addCardToLiked}
              />
            )}
            {/* <button
              className={
                isLiked
                  ? 'movies-card__like-button_clicked'
                  : 'movies-card__like-button'
              }
              type='button'
              onClick={
                handleLikeClick()
                // () => setIsLiked(!isLiked)
              }
            /> */}
          </div>
          <p className='movies-card__duration'>{convertedDuration}</p>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
