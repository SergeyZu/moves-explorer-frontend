import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {/* <li> */}
        {/* {movies.map((movie) => (
          <MoviesCard movie={movie} />
        ))} */}
        {/* </li> */}
        {/* <MoviesCard src='#' title='title' duration='duration' /> */}
        {/* <MoviesCard movies={movies} /> */}
        {/* <MoviesCard /> */}
      </ul>
    </section>
  )
}

export default MoviesCardList
