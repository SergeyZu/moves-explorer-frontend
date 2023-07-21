import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm />
          <MoviesCardList />
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
