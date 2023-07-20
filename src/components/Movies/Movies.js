import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreButton from '../Buttons/MoreButton/MoreButton'
import Footer from '../Footer/Footer'

function Movies() {
  return (
    <main className='movies'>
      <div className='movies__container'>
        <Header />
        <SearchForm />
        <MoviesCardList />
        <div className='movies__more'>
          <MoreButton />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Movies
