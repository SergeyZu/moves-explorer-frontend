import { useState, useEffect } from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer'
import { getMovies } from '../../utils/MainApi'
import filterMovies from '../../utils/filterMovies'

function SavedMovies({
  isLoggedIn,
  token,
  isLoading,
  likedMovies,
  setIsLoading,
  // searchRequest,

  // handleInputChange,
  // handleSearchFormSubmit,
  deleteCard,
  savedMovies,
  setSavedMovies,
}) {
  const [isShortFilm, setIsShortFilm] = useState(false) // состояние чекбокса короткометражек
  const [searchRequest, setSearchRequest] = useState('')
  const [allSavedMovies, setAllSavedMovies] = useState([])

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }

  // const getSavedMovies = () => {
  //   setIsLoading(true)

  //   getMovies(token)
  //     .then((movies) => {
  //       return filterMovies(movies, searchRequest, isShortFilm)
  //     })
  //     .then((filteredMovies) => {
  //       setSavedMovies(filteredMovies)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }
  const getSavedMovies = async () => {
    // setIsLoading(true)
    try {
      const savedMovies = await getMovies(token)
      if (savedMovies) {
        // return filterMovies(savedMovies, searchRequest, isShortFilm)
        setSavedMovies(savedMovies)
      }
    } catch (err) {
      console.log(err)
    }
    // setIsLoading(false)
  }

  useEffect(() => {
    isLoggedIn && getSavedMovies()
  }, [isLoggedIn])

  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault()
    return filterMovies(savedMovies, searchRequest, isShortFilm)
  }

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
