import './SavedMoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMoviesCardList({ likedMovies, isLoading, handleDeleteCard }) {
  return (
    <section className='saved-movies-card-list'>
      <ul className='saved-movies-card-list__list'>
        {likedMovies &&
          likedMovies.map((movie) => (
            <MoviesCard
<<<<<<< HEAD
              key={movie?._id}
              src={movie?.image.slice(28)}
=======
              key={movie?.id}
              src={movie?.image?.url}
>>>>>>> c069796a87bcfaad1b278f305b1ab7aee7ab3ae1
              title={movie?.nameRU}
              duration={movie?.duration}
              trailerLink={movie?.trailerLink}
              movie={movie}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
<<<<<<< HEAD
        {console.log(likedMovies)}
=======
>>>>>>> c069796a87bcfaad1b278f305b1ab7aee7ab3ae1
      </ul>
    </section>
  )
}

export default SavedMoviesCardList
