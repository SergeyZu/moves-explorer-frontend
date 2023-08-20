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
  setSearchRequest,
  handleInputChange,
  handleCreateCard,
  handleDeleteCard,
}) {
  const [allMovies, setAllMovies] = useState([]) // массив фильмов с Beatfilm
  const [foundMovies, setFoundMovies] = useState([]) // массив фильмов по запросу
  // const [shortMovies, setShortMovies] = useState([]) // массив короткометражек
  // const [isFilterOn, setIsFilterOn] = useState(false) // состояние чекбокса короткометражек
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
  localStorage.setItem('isShortFilm', isShortFilm)

  // обработчик отправки формы поиска
  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault()
    handleRequest()
    !searchRequest
      ? setRequestError('Нужно ввести ключевое слово')
      : setRequestError('')
  }

  // обработчик поискового запроса (в зависимости от наличия массива фильмов)
  function handleRequest() {
    !searchRequest
      ? setRequestError('Нужно ввести ключевое слово')
      : getMovies()
    // : setRequestError('')
    // !localStorage.getItem('allMovies')
    // !localStorage.getItem('dataForRender')
    // !localStorage.dataForRender
    //   ? getMovies()
    //   : // : filterMovies(allMovies)
    //     handleSearchRequest()
    // filterFoundMovies()
  }

  // получение списка фильмов с Beatfilm
  const getMovies = () => {
    setIsLoading(true)

    moviesApi
      .getAllMovies()
      .then((movies) => {
        setAllMovies(movies)
        return filterMovies(movies)
      })
      .then((filteredMovies) => {
        const dataForRender = { filteredMovies, searchRequest, isShortFilm }
        localStorage.setItem('dataForRender', JSON.stringify(dataForRender))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // useEffect(() => {
  //   getMovies()
  // }, [isShortFilm])

  // // фильтрация начального массива фильмов по поисковому запросу
  // const searchRequestHandler = (searchRequest) => {
  //   const initialMovies = JSON.parse(localStorage.getItem('allMovies'))
  //   const resultSearchRequest = searchRequest.toLowerCase()

  //   const selectedMovies = initialMovies.filter((movie) => {
  //     const ruTitleToLowerCase = movie.nameRU.toLowerCase()
  //     const enTitleToLowerCase = movie.nameEN.toLowerCase()
  //     return (
  //       ruTitleToLowerCase.includes(resultSearchRequest) ||
  //       enTitleToLowerCase.includes(resultSearchRequest)
  //     )
  //   })

  //   localStorage.setItem('foundMovies', JSON.stringify(selectedMovies))
  //   return selectedMovies
  // }

  // const [isShortFilm, setIsShortFilm] = useState(
  //   JSON.parse(localStorage.getItem('isShortFilm')),
  // )

  // // фильтрация массива фильмов по длительности
  // const filterShortMovies = (movies) => {
  //   return movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
  // }

  // const filterMovies = (movies, searchRequest, isShortFilm) => {
  const filterMovies = (movies) => {
    const filterMoviesbyRequest = () => {
      const filteredMoviesbyRequest = movies.filter((movie) => {
        // movies.filter((movie) => {
        const ruTitleToLowerCase = movie.nameRU.toLowerCase()
        const enTitleToLowerCase = movie.nameEN.toLowerCase()
        const resultSearchRequest = searchRequest.toLowerCase()
        return (
          ruTitleToLowerCase.includes(resultSearchRequest) ||
          enTitleToLowerCase.includes(resultSearchRequest)
        )
      })
      return filteredMoviesbyRequest
    }

    const filterMoviesbyDuration = () => {
      return filterMoviesbyRequest().filter(
        (movie) => movie.duration <= SHORT_FILM_DURATION,
      )
    }

    return !isShortFilm
      ? filterMoviesbyRequest()
      : filterMoviesbyDuration(filterMoviesbyRequest())
  }

  // получение данных для рендеринга из localStorage
  useEffect(() => {
    const dataForRender = localStorage.getItem('dataForRender')
    if (dataForRender) {
      const { filteredMovies } = JSON.parse(dataForRender)
      setFoundMovies(filteredMovies)
      setSearchRequest(searchRequest)
      setIsShortFilm(isShortFilm)
    }
  }, [])

  // // обработка поискового запроса
  // const handleSearchRequest = () => {
  //   if (searchRequest !== '') {
  //     localStorage.setItem('searchRequest', searchRequest)
  //     // setFoundMovies(searchRequestHandler(searchRequest))
  //     setFoundMovies(filterMovies(allMovies))
  //     checkFoundMoviesLength()
  //   }
  // }

  //// проверка массива найденных фильмов (найдено что-то или нет)
  // const checkFilteredMoviesLength = () => {
  //   foundMovies.length === 0
  //     ? setMoviesNotFoundMessage('Ничего не найдено')
  //     : setMoviesNotFoundMessage('')
  // }

  useEffect(() => {
    if (searchRequest === '') return
    foundMovies.length === 0
      ? setMoviesNotFoundMessage('Ничего не найдено')
      : setMoviesNotFoundMessage('')
  }, [foundMovies])

  // useEffect(() => {
  //   checkFoundMoviesLength()
  // }, [foundMovies])

  // обработчик переключателя "Короткометражки"
  const filterShortMoviesHandler = () => {
    setIsShortFilm(!isShortFilm)
    // isShortFilm && setShortMovies(filterShortMovies(foundMovies))
    // : setShortMovies(foundMovies)
    // console.log(shortMovies)
  }

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
            onChangeShortFilmToggle={filterShortMoviesHandler}
            requestError={requestError}
          />
          <span className='movies__message'>{moviesNotFoundMessage}</span>
          <MoviesCardList
            // foundMovies={foundMovies}
            foundMovies={foundMovies}
            // shortMovies={shortMovies}
            isLoading={isLoading}
            isFilterOn={isShortFilm}
            renderedCardQty={renderedCardQty}
            handleCreateCard={handleCreateCard}
            handleDeleteCard={handleDeleteCard}
          />
          <button
            className={
              foundMovies.length > renderedCardQty
                ? 'movies__more-button'
                : 'hidden'
            }
            // className={
            //   !isShortFilm
            //     ? foundMovies.length > renderedCardQty
            //       ? 'movies__more-button'
            //       : 'hidden'
            //     : shortMovies.length > renderedCardQty
            //     ? 'movies__more-button'
            //     : 'hidden'
            // }
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
