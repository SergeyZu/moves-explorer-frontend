import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SavedCardList from '../SavedCardList/SavedCardList'
import Footer from '../Footer/Footer'

function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <section className='saved-movies__container'>
          <SearchForm />
          {/* <div className='saved-movies__card-list'> */}
          <SavedCardList />
          {/* </div> */}
          {/* <div className='saved-movies__footer'></div> */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
