import { useState, useEffect } from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'
// import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { getMovies } from '../../utils/MainApi'

function SavedMovies({
  isLoggedIn,
  token,
  isLoading,
  likedMovies,
  searchRequest,
  handleInputChange,
  handleSearchFormSubmit,
  deleteCard,
  savedMovies,
  setSavedMovies,
}) {
  const [isShortFilm, setIsShortFilm] = useState(false) // состояние чекбокса короткометражек

  const getSavedMovies = async () => {
    try {
      const savedMovies = await getMovies(token)
      if (savedMovies) {
        setSavedMovies(savedMovies)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    isLoggedIn && getSavedMovies()
  }, [isLoggedIn])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <section className='saved-movies__container'>
          <SearchForm
            searchRequest={searchRequest}
            onChange={handleInputChange}
            onSubmit={handleSearchFormSubmit}
            isFilterOn={isShortFilm}
          />
          <SavedMoviesCardList
            likedMovies={savedMovies}
            isLoading={isLoading}
            deleteCard={deleteCard}
          />
          {/* <MoviesCardList /> */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
