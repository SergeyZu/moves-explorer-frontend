import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            src={movie.image.url}
            title={movie.nameRU}
            duration={movie.duration}
          />
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList
