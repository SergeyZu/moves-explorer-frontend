import './SavedMoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMoviesCardList({ likedMovies, isLoading, handleDeleteCard }) {
  return (
    <section className='saved-movies-card-list'>
      <ul className='saved-movies-card-list__list'>
        {likedMovies &&
          likedMovies.map((movie) => (
            <MoviesCard
              key={movie?.id}
              src={movie?.image?.url}
              title={movie?.nameRU}
              duration={movie?.duration}
              trailerLink={movie?.trailerLink}
              movie={movie}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
      </ul>
    </section>
  )
}

export default SavedMoviesCardList
