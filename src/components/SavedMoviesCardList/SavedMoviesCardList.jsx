import './SavedMoviesCardList.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'

function SavedMoviesCardList() {
  return (
    <section className='saved-movies-card-list'>
      <ul className='saved-movies-card-list__list'>
        <SavedMoviesCard />
        <SavedMoviesCard />
        <SavedMoviesCard />
      </ul>
    </section>
  )
}

export default SavedMoviesCardList
