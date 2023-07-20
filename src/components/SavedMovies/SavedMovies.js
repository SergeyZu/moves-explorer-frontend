import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <Header />
        <SearchForm />
        <div className='saved-movies__card-list'>
          <MoviesCardList />
        </div>
        {/* <div className='saved-movies__footer'></div> */}
      </div>
      <Footer />
    </main>
  )
}

export default SavedMovies
