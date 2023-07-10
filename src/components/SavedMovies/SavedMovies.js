import './SavedMovies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  )
}

export default SavedMovies
