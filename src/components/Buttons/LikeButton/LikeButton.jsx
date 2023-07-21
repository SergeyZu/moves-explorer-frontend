import like from '../../../images/like.svg'
import './LikeButton.css'

function LikeButton() {
  return <img className='like-button' src={like} alt='Мне нравится' />
}

export default LikeButton
