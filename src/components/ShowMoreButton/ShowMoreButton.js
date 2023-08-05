import './ShowMoreButton.css'

function ShowMoreButton({ movies }) {
  let qtyAddedCards
  let visibleCardsLength

  if (window.innerWidth > 1027) {
    qtyAddedCards = 3
  } else if (window.innerWidth <= 1027 && window.innerWidth > 649) {
    qtyAddedCards = 2
  } else {
    qtyAddedCards = 1
  }

  const moviesLength = JSON.parse(localStorage.getItem('foundMovies')).length

  const showMoreCards = () => {
    const visibleCards = movies.slice(0, qtyAddedCards)
    visibleCards.forEach((card) => card.classList.add('is-visible'))
    visibleCardsLength = visibleCards.length
  }

  return (
    <button
      className={
        visibleCardsLength === moviesLength
          ? 'show-more-button_hide'
          : 'show-more-button'
      }
      type='button'
      onClick={showMoreCards}
    >
      Ещё
    </button>
  )
}

export default ShowMoreButton
