import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({
  movies,
  isLoading,
  handleCreateCard,
  handleDeleteCard,
}) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map((movie) => (
            <MoviesCard
              key={movie?.id}
              src={movie?.image?.url}
              title={movie?.nameRU}
              duration={movie?.duration}
              trailerLink={movie?.trailerLink}
              movie={movie}
              handleCreateCard={handleCreateCard}
              handleDeleteCard={handleDeleteCard}
            />
          ))
        )}
      </ul>
    </section>
  )
}

export default MoviesCardList
