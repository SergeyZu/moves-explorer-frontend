import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({
  foundMovies,
  isLoading,
  createCard,
  deleteCard,
  renderedCardQty,
}) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {isLoading ? (
          <Preloader />
        ) : (
          foundMovies
            .slice(0, renderedCardQty)
            .map((movie) => (
              <MoviesCard
                key={movie?.id}
                src={movie?.image?.url}
                title={movie?.nameRU}
                duration={movie?.duration}
                trailerLink={movie?.trailerLink}
                movie={movie}
                createCard={createCard}
                deleteCard={deleteCard}
              />
            ))
        )}

        {/* {isLoading ? (
          <Preloader />
        ) : !isFilterOn ? (
          foundMovies &&
          foundMovies
            .slice(0, renderedCardQty)
            .map((movie) => (
              <MoviesCard
                key={movie?.id}
                src={movie?.image?.url}
                title={movie?.nameRU}
                duration={movie?.duration}
                trailerLink={movie?.trailerLink}
                movie={movie}
                createCard={createCard}
                deleteCard={deleteCard}
              />
            ))
        ) : (
          shortMovies &&
          shortMovies
            .slice(0, renderedCardQty)
            .map((movie) => (
              <MoviesCard
                key={movie?.id}
                src={movie?.image?.url}
                title={movie?.nameRU}
                duration={movie?.duration}
                trailerLink={movie?.trailerLink}
                movie={movie}
                createCard={createCard}
                deleteCard={deleteCard}
              />
            ))
        )} */}
      </ul>
    </section>
  )
}

export default MoviesCardList
