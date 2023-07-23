import { useState } from 'react'
import './SavedCard.css'
import words from '../../images/33words.png'

function SavedCard() {
  return (
    <>
      <li className='saved-card'>
        <img className='saved-card__image' src={words} alt='Кадр из фильма' />
        <div className='saved-card__info'>
          <h2 className='saved-card__title'>33 слова о дизайне</h2>
          <button className='saved-card__delete-btn' />
          {/* <checkbox className='saved-card__like'>
            <img
              className='saved-card__like-image'
              onClick={() => setIsLiked(!isLiked)}
              src={isLiked ? like : likeoff}
              alt='Переключатель'
            />
          </checkbox> */}
          <p className='saved-card__duration'>1ч 47м</p>
        </div>
      </li>
    </>
  )
}

export default SavedCard
