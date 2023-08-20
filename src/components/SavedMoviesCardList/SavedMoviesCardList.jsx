import './SavedMoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMoviesCardList({ likedMovies, isLoading, deleteCard }) {
  return (
    <section className='saved-movies-card-list'>
      <ul className='saved-movies-card-list__list'>
        {likedMovies &&
          likedMovies.map((movie) => (
            <MoviesCard
              key={movie?._id}
              src={movie?.image.slice(28)}
              title={movie?.nameRU}
              duration={movie?.duration}
              trailerLink={movie?.trailerLink}
              movie={movie}
              deleteCard={deleteCard}
            />
          ))}
      </ul>
    </section>
  )
}

export default SavedMoviesCardList
