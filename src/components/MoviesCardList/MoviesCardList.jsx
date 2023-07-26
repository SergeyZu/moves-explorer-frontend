import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {/* <li> */}
        {movies.map((movie) => (
          <MoviesCard movieData={movie} key={movie.id} />
        ))}
        {/* </li> */}
        {/* <MoviesCard src='#' title='title' duration='duration' /> */}
        {/* <MoviesCard movieData={movies} /> */}
        {/* <MoviesCard /> */}
      </ul>
    </section>
  )
}

export default MoviesCardList
