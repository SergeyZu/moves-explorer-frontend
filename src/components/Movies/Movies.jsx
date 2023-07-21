import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreButton from '../Buttons/MoreButton/MoreButton'
import Footer from '../Footer/Footer'

function Movies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm />
          <MoviesCardList />
          <div className='movies__more'>
            <MoreButton />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
