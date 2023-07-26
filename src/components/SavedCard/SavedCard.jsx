import { useState } from 'react'
import './SavedCard.css'

function SavedCard() {
  return (
    <>
      <li className='saved-card'>
        <img className='saved-card__image' alt='Кадр из фильма' />
        <div className='saved-card__info'>
          <h2 className='saved-card__title'>33 слова о дизайне</h2>
          <button className='saved-card__delete-btn' />
          <p className='saved-card__duration'>1ч 47м</p>
        </div>
      </li>
    </>
  )
}

export default SavedCard
