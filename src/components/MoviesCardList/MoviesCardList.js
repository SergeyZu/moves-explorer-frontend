import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <section>
      <ul className='movies-card-list'>
        <MoviesCard />
      </ul>
    </section>
  )
}

export default MoviesCardList
