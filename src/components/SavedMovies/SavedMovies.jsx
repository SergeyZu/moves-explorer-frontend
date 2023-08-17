import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'
// import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies({
  isLoggedIn,
  isLoading,
  likedMovies,
  searchRequest,
  handleInputChange,
  handleSearchFormSubmit,
  handleDeleteCard,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <section className='saved-movies__container'>
          <SearchForm
            searchRequest={searchRequest}
            onChange={handleInputChange}
            onSubmit={handleSearchFormSubmit}
            // isFilterOn={isFilterOn}
          />
          <SavedMoviesCardList
            likedMovies={likedMovies}
            isLoading={isLoading}
            handleDeleteCard={handleDeleteCard}
          />
          {/* <MoviesCardList /> */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
