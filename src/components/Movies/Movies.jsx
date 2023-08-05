import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
// import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'

function Movies({ isLoggedIn }) {
  const [searchRequest, setSearchRequest] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [foundMovies, setFoundMovies] = useState([])
  const [shortMovies, setShortMovies] = useState([])
  const [isFilterOn, setIsFilterOn] = useState(false)
  let [renderedCardQty, setRenderedCardQty] = useState(12)

  localStorage.setItem('isShortFilm', isFilterOn)

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    handleRequest()
  }

  function handleRequest() {
    !localStorage.getItem('allMovies')
      ? getMoviesFromServer()
      : handleSearchRequest()
  }

  const getMoviesFromServer = () => {
    setIsLoading(true)
    moviesApi
      .getAllMovies()
      .then((data) => {
        const moviesArr = JSON.stringify(data)
        localStorage.setItem('allMovies', moviesArr)
      })
      .then(() => {
        handleSearchRequest()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSearchRequest = () => {
    if (searchRequest !== '') {
      localStorage.setItem('searchRequest', searchRequest)
      setFoundMovies(searchRequestHandler(searchRequest))
    }
  }

  const searchRequestHandler = (searchRequest) => {
    const initialMovies = JSON.parse(localStorage.getItem('allMovies'))
    const resultSearchRequest = searchRequest.toLowerCase()
    const selectedMovies = initialMovies.filter((movie) => {
      const ruTitleToLowerCase = movie.nameRU.toLowerCase()
      const enTitleToLowerCase = movie.nameEN.toLowerCase()
      return (
        ruTitleToLowerCase.includes(resultSearchRequest) ||
        enTitleToLowerCase.includes(resultSearchRequest)
      )
    })
    localStorage.setItem('foundMovies', JSON.stringify(selectedMovies))
    return selectedMovies
  }

  // const [isShortFilm, setIsShortFilm] = useState(
  //   JSON.parse(localStorage.getItem('isShortFilm')),
  // )

  //     if (searchRequest !== '') {
  //       localStorage.setItem('searchRequest', searchRequest)
  //       localStorage.getItem('allMovies') === null &&
  //         (await )
  //       setFoundMovies(searchRequestHandler(searchRequest))
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const filterShortMovies = (movies) => {
  //   return movies.filter((movie) => {
  //     return movie.duration <= 40
  //   })
  // }

  // const filterShortMoviesHandler = () => {
  //   setShortMovies(filterShortMovies(foundMovies))
  // }

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }

  const showMoreCards = () => {
    setRenderedCardQty((renderedCardQty += 3))
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
            isFilterOn={isFilterOn}
            setIsFilterOn={setIsFilterOn}
          />
          <MoviesCardList movies={foundMovies} isLoading={isLoading} />
          {/* <ShowMoreButton movies={foundMovies} /> */}
          <button
            // className={
            //   visibleCardsLength === moviesLength
            //     ? 'show-more-button_hide'
            //     : 'show-more-button'
            // }
            className='movies__more-button'
            type='button'
            onClick={showMoreCards}
          >
            Ещё
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
