import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
import { MAX_WIDTH } from '../../constants/constants'
import { MIDDLE_WIDTH } from '../../constants/constants'
import { MAX_WIDTH_CARD_QTY } from '../../constants/constants'
import { MIDDLE_WIDTH_CARD_QTY } from '../../constants/constants'
import { MIN_WIDTH_CARD_QTY } from '../../constants/constants'
import { MAX_WIDTH_ADDED_CARD_QTY } from '../../constants/constants'
import { MIN_WIDTH_ADDED_CARD_QTY } from '../../constants/constants'
import { SHORT_FILM_DURATION } from '../../constants/constants'

function Movies({
  isLoggedIn,
  isLoading,
  setIsLoading,
  searchRequest,
  handleInputChange,
  handleCreateCard,
  handleDeleteCard,
}) {
  const [movies, setMovies] = useState([]) // текущий массив фильмов
  // const [foundMovies, setFoundMovies] = useState([]) // массив фильмов по запросу
  // const [shortMovies, setShortMovies] = useState([]) // массив короткометражек
  const [isShortFilm, setIsShortFilm] = useState(false) // состояние чекбокса короткометражек
  const [requestError, setRequestError] = useState('')
  const [moviesNotFoundMessage, setMoviesNotFoundMessage] = useState('')

  // количество изначально отрисовываемых карточек
  const computeRenderedCardQty = () => {
    if (window.innerWidth > MAX_WIDTH) {
      return MAX_WIDTH_CARD_QTY
    } else if (
      window.innerWidth <= MAX_WIDTH &&
      window.innerWidth > MIDDLE_WIDTH
    ) {
      return MIDDLE_WIDTH_CARD_QTY
    } else {
      return MIN_WIDTH_CARD_QTY
    }
  }

  // стейт количества отрисовываемых карточек
  const [renderedCardQty, setRenderedCardQty] = useState(
    computeRenderedCardQty(),
  )

  // сброс стейта количества отрисовываемых карточек при изменении поискового запроса
  useEffect(() => {
    setRenderedCardQty(computeRenderedCardQty())
  }, [searchRequest])

  // количество отрисовываемых карточек
  localStorage.setItem('renderedCardQty', renderedCardQty)

  // состояние переключателя "Короткометражки"
  // localStorage.setItem('isShortFilm', isFilterOn)

  // обработчик отправки формы поиска
  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault()
    !searchRequest
      ? setRequestError('Нужно ввести ключевое слово')
      : setRequestError('')
    handleRequest()
    // filterFoundMovies()
  }

  useEffect(() => {
    handleRequest()
  }, [])

  // обработчик поискового запроса (в зависимости от наличия массива фильмов)
  function handleRequest() {
    !localStorage.getItem('dataForRender')
      ? getMoviesFromServer()
      : handleSearchRequest()
    // filterFoundMovies()
  }

  // получение списка фильмов со стороннего сервера
  const getMoviesFromServer = (searchRequest, isShortFilm) => {
    setIsLoading(true)
    moviesApi
      .getAllMovies()
      .then((allMovies) => {
        return handleSearchRequest(searchRequest, allMovies, isShortFilm)
      })
      .then((foundMovies) => {
        setMovies(foundMovies)
        const dataForRender = { searchRequest, foundMovies, isShortFilm }
        localStorage.setItem('dataForRender', JSON.stringify(dataForRender))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // const getMoviesFromServer = () => {
  //   setIsLoading(true)
  //   moviesApi
  //     .getAllMovies()
  //     .then((data) => {
  //       const moviesArr = JSON.stringify(data)
  //       localStorage.setItem('allMovies', moviesArr)
  //     })
  //     .then(() => {
  //       handleSearchRequest()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  // обработка поискового запроса

  const handleSearchRequest = (searchRequest, allMovies, isShortFilm) => {
    const searchRequestHandler = () => {
      const resultSearchRequest = searchRequest.toLowerCase()

      const selectedMovies = allMovies.filter((movie) => {
        const ruTitleToLowerCase = movie.nameRU.toLowerCase()
        const enTitleToLowerCase = movie.nameEN.toLowerCase()
        return (
          ruTitleToLowerCase.includes(resultSearchRequest) ||
          enTitleToLowerCase.includes(resultSearchRequest)
        )
      })
      return selectedMovies
    }

    const filterShortMovies = (movies) => {
      return movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
    }

    !isShortFilm
      ? searchRequestHandler()
      : filterShortMovies(searchRequestHandler())
  }

  // const handleSearchRequest = () => {
  //     if (searchRequest !== '') {
  //       localStorage.setItem('searchRequest', searchRequest)
  //       setFoundMovies(searchRequestHandler(searchRequest))
  //       checkFoundMoviesLength()
  //     }
  //   }

  // const searchRequestHandler = (searchRequest, allMovies, isShortFilm) => {
  //   // const initialMovies = JSON.parse(localStorage.getItem('allMovies'))
  //   const resultSearchRequest = searchRequest.toLowerCase()

  //   const selectedMovies = allMovies.filter((movie) => {
  //     const ruTitleToLowerCase = movie.nameRU.toLowerCase()
  //     const enTitleToLowerCase = movie.nameEN.toLowerCase()
  //     return (
  //       ruTitleToLowerCase.includes(resultSearchRequest) ||
  //       enTitleToLowerCase.includes(resultSearchRequest)
  //     )
  //   })
  //   isShortFilm ? (

  //   ) : ()

  //   // localStorage.setItem('foundMovies', JSON.stringify(selectedMovies))
  //   return selectedMovies
  // }

  // useEffect(() => {
  //   handleSearchRequest()
  // }, [])

  // // фильтрация массива фильмов по длительности
  // const filterShortMovies = (movies) => {
  //   return movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
  // }

  // обработчик переключателя "Короткометражки"
  // const filterShortMoviesHandler = () => {
  //   setIsShortFilm(!isShortFilm)
  //   isShortFilm && setShortMovies(filterShortMovies(foundMovies))
  //   // : setShortMovies(foundMovies)
  //   // console.log(shortMovies)
  // }

  // проверка массива найденных фильмов (найдено что-то или нет)
  // const checkFoundMoviesLength = () => {
  //   foundMovies.length === 0
  //     ? setMoviesNotFoundMessage('Ничего не найдено')
  //     : setMoviesNotFoundMessage('')
  // }

  // useEffect(() => {
  //   checkFoundMoviesLength()
  // }, [foundMovies])

  // const filteredMovies = () => {
  //   foundMovies.filter((movie) => {
  //     return movie.duration <= 40
  //   })
  // }

  // const filterFoundMovies = () => {
  //   // if (localStorage.isShortFilm === true) {
  //   localStorage.isShortFilm && filteredMovies()
  //   return filteredMovies
  // }

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

  // фильтрация начального массива фильмов, подходящих под поисковый запрос

  // const [isShortFilm, setIsShortFilm] = useState(
  //   JSON.parse(localStorage.getItem('isShortFilm')),
  // )
  // const onChangeShortFilmToggle = () => {
  //   setIsFilterOn(!isFilterOn)
  // }

  // обработчик клика по кнопке [Ещё]
  const showMoreCards = () => {
    window.innerWidth > MAX_WIDTH
      ? setRenderedCardQty(renderedCardQty + MAX_WIDTH_ADDED_CARD_QTY)
      : setRenderedCardQty(renderedCardQty + MIN_WIDTH_ADDED_CARD_QTY)
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
            isFilterOn={isShortFilm}
            // onChangeShortFilmToggle={filterShortMoviesHandler}
            requestError={requestError}
          />
          <span className='movies__message'>{moviesNotFoundMessage}</span>
          <MoviesCardList
            // foundMovies={foundMovies}
            // shortMovies={shortMovies}
            isLoading={isLoading}
            isFilterOn={isShortFilm}
            renderedCardQty={renderedCardQty}
            handleCreateCard={handleCreateCard}
            handleDeleteCard={handleDeleteCard}
          />
          {/* <button
            className={
              !isShortFilm && foundMovies.length > renderedCardQty
                ? 'movies__more-button'
                : 'hidden'
              // : shortMovies.length > renderedCardQty
              // ? 'movies__more-button'
              // : 'hidden'
            }
            type='button'
            onClick={showMoreCards}
          >
            Ещё
          </button> */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
