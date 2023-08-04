import './ShowMoreButton.css'

function ShowMoreButton({ movies }) {
  // let qtyAddedCards

  // if (window.innerWidth > 1027) {
  //   qtyAddedCards = 3
  // } else if (window.innerWidth <= 1027 && window.innerWidth > 649) {
  //   qtyAddedCards = 2
  // } else {
  //   qtyAddedCards = 1
  // }

  // const moviesLength = JSON.parse(localStorage.getItem('foundMovies')).length

  // const showMoreCards = () => {
  //   const visibleCards = movies.slice(0, qtyAddedCards)
  //   visibleCards.forEach((card) => card.classList.add('is-visible'))

  //   // if (visibleCards.length === moviesLength) {

  //   // }
  // }

  return (
    <button className='show-more-button' type='button'>
      Ещё
    </button>
  )
}

export default ShowMoreButton
