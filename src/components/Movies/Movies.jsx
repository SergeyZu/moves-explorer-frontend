import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
import filterMovies from '../../utils/filterMovies'
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
  // handleInputChange,
  createCard,
  deleteCard,
  savedMovies,
  setSavedMovies,
}) {
  const [foundMovies, setFoundMovies] = useState([]) // массив фильмов по запросу
  // const [searchRequest, setSearchRequest] = useState('')
  const [isShortFilm, setIsShortFilm] = useState(false) // состояние чекбокса короткометражек
  const [requestError, setRequestError] = useState('')
  const [moviesNotFoundMessage, setMoviesNotFoundMessage] = useState('')
  const allMovies = JSON.parse(localStorage.getItem('allMovies'))

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }
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
    !searchRequest
      ? setRequestError('Нужно ввести ключевое слово')
      : getMovies()
  }

  // // обработчик отправки формы поиска
  // const handleSearchFormSubmit = (evt) => {
  //   evt.preventDefault()
  //   handleRequest()
  //   !searchRequest
  //     ? setRequestError('Нужно ввести ключевое слово')
  //     : setRequestError('')
  // }

  // обработчик поискового запроса (в зависимости от наличия массива фильмов)
  // function handleRequest() {
  //   !searchRequest
  //     ? setRequestError('Нужно ввести ключевое слово')
  //     : getMovies()
  // }

  // получение списка фильмов с Beatfilm
  const getMovies = () => {
    setIsLoading(true)

    moviesApi
      .getAllMovies()
      .then((movies) => {
        // setAllMovies(movies)
        localStorage.setItem('allMovies', JSON.stringify(movies))
        return filterMovies(movies, searchRequest, isShortFilm)
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

  // обработчик переключателя "Короткометражки"
  const filterShortMoviesHandler = () => {
    setIsShortFilm(!isShortFilm)
    // return filterMovies(allMovies, searchRequest, isShortFilm)
    // isShortFilm && setShortMovies(filterShortMovies(foundMovies))
    // : setShortMovies(foundMovies)
  }
  // useEffect(() => {
  //   filterMovies(allMovies, searchRequest, isShortFilm)
  // }, [isShortFilm])

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
            toggleShortFilm={filterShortMoviesHandler}
            requestError={requestError}
          />
          <span className='movies__message'>{moviesNotFoundMessage}</span>
          <MoviesCardList
            foundMovies={foundMovies}
            isLoading={isLoading}
            isFilterOn={isShortFilm}
            renderedCardQty={renderedCardQty}
            createCard={createCard}
            deleteCard={deleteCard}
          />
          <button
            className={
              foundMovies.length > renderedCardQty
                ? 'movies__more-button'
                : 'hidden'
            }
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
