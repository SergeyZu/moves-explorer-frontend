import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
// import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'

function Movies({
  isLoggedIn,
  isLoading,
  setIsLoading,
  searchRequest,
  handleInputChange,
  // handleSearchFormSubmit,
  handleCreateCard,
  handleDeleteCard,
}) {
  const [foundMovies, setFoundMovies] = useState([]) // массив фильмов по запросу
  const [shortMovies, setShortMovies] = useState([]) // массив короткометражек
  const [isFilterOn, setIsFilterOn] = useState(false) // состояние чекбокса короткометражек
  // const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(true) // состояние кнопки [Ещё]

  const computeRenderedCardQty = () => {
    if (window.innerWidth > 1027) {
      return 12
    } else if (window.innerWidth <= 1027 && window.innerWidth > 649) {
      return 8
    } else {
      return 5
    }
  }

  const [renderedCardQty, setRenderedCardQty] = useState(
    computeRenderedCardQty(),
  )

  useEffect(() => {
    setRenderedCardQty(computeRenderedCardQty())
  }, [searchRequest])

  localStorage.setItem('renderedCardQty', renderedCardQty)

  localStorage.setItem('isShortFilm', isFilterOn)

  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault()

    handleRequest()
    filterFoundMovies()
  }

  useEffect(() => {
    handleRequest()
  }, [])

  function handleRequest() {
    !localStorage.getItem('allMovies')
      ? getMoviesFromServer()
      : handleSearchRequest()
    // filterFoundMovies()
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

  useEffect(() => {
    handleSearchRequest()
  }, [])

  const filteredMovies = () => {
    foundMovies.filter((movie) => {
      return movie.duration <= 40
    })
  }

  const filterFoundMovies = () => {
    // if (localStorage.isShortFilm === true) {
    localStorage.isShortFilm && filteredMovies()

    return filteredMovies
  }

  // const filterFoundMovies = () => {
  //   // const foundMoviesLS = parse.localStorage.foundMovies
  //   const foundMoviesLS = JSON.parse(localStorage.getItem('foundMovies'))
  //   if (localStorage.isShortFilm === true) {
  //     const filteredMovies = () =>
  //       foundMoviesLS.filter((movie) => {
  //         // [localStorage.foundMovies].filter((movie) => {
  //         return movie.duration <= 40
  //       })

  //     return filteredMovies
  //   }
  // }

  // useEffect(() => {
  //   searchRequestHandler(searchRequest)
  // }, [foundMovies])

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
  // const onChangeShortFilmToggle = () => {
  //   setIsFilterOn(!isFilterOn)
  // }

  const filterShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40)
  }

  const filterShortMoviesHandler = () => {
    setIsFilterOn(!isFilterOn)
    isFilterOn && setShortMovies(filterShortMovies(foundMovies))
    // : setShortMovies(foundMovies)
    console.log(shortMovies)
  }

  const showMoreCards = () => {
    window.innerWidth > 1027
      ? setRenderedCardQty(renderedCardQty + 3)
      : setRenderedCardQty(renderedCardQty + 2)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            searchRequest={searchRequest}
            onChange={handleInputChange}
            onSubmit={handleSearchFormSubmit}
            isFilterOn={isFilterOn}
            // setIsFilterOn={setIsFilterOn}
            onChangeShortFilmToggle={filterShortMoviesHandler}
          />
          <MoviesCardList
            movies={foundMovies}
            isLoading={isLoading}
            renderedCardQty={renderedCardQty}
            handleCreateCard={handleCreateCard}
            handleDeleteCard={handleDeleteCard}
          />
          {/* {renderedCardQty < foundMovies.lehgth && ( */}
          <button
            className={
              foundMovies.length > renderedCardQty
                ? 'movies__more-button'
                : 'hidden'
            }
            // className='movies__more-button'
            type='button'
            onClick={showMoreCards}
          >
            Ещё
          </button>
          {/* )} */}

          {/* )} */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
