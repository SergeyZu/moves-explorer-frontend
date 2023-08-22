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
  //searchRequest,
  //setSearchRequest,
  // handleInputChange,
  createCard,
  deleteCard,
  savedMovies,
  setSavedMovies,
}) {
  const [foundMovies, setFoundMovies] = useState([]) // массив фильмов по запросу
  const [searchRequest, setSearchRequest] = useState(localStorage.getItem('searchRequest') || '')
  const [isShortFilm, setIsShortFilm] = useState(false) // состояние чекбокса короткометражек
  const [requestError, setRequestError] = useState('')
  const [moviesNotFoundMessage, setMoviesNotFoundMessage] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  //const allMovies = JSON.parse(localStorage.getItem('allMovies'))
  

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


  // обработчик отправки формы поиска
  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault()
    getMovies();
  }


  const getMovies = () => {
    //setIsLoading(true)
    if (localStorage.getItem('allMovies')) {
      const allMovies = JSON.parse(localStorage.getItem('allMovies'));
      const result = filterMovies(allMovies, searchRequest, isShortFilm)
      const dataForRender = { result, searchRequest, isShortFilm }
      localStorage.setItem('dataForRender', JSON.stringify(dataForRender))
      setFoundMovies(result);
    } else {
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
        setFoundMovies(dataForRender.filteredMovies)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
       // setIsLoading(false)
      })
    }
  }

  useEffect(() => {
    if (foundMovies.length === 0 && isLoading === false) {
      setMoviesNotFoundMessage('Ничего не найдено')
    } else {
      setMoviesNotFoundMessage('')
    }
  }, [foundMovies, isLoading])

  // обработчик переключателя "Короткометражки"
  const filterShortMoviesHandler = () => {
    setIsShortFilm(!isShortFilm)
    localStorage.setItem('isShortFilm', !isShortFilm)
  }

  useEffect(() => {
    setMoviesNotFoundMessage('')
  }, [])


  // обработчик клика по кнопке [Ещё]
  const showMoreCards = () => {
    window.innerWidth > MAX_WIDTH
      ? setRenderedCardQty(renderedCardQty + MAX_WIDTH_ADDED_CARD_QTY)
      : setRenderedCardQty(renderedCardQty + MIN_WIDTH_ADDED_CARD_QTY)
  }

  useEffect(() => {
    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      setMovies(movies);

      if (localStorage.getItem('isShortFilm') === 'true') {
        setFilteredMovies(movies?.filter((el) => el.duration < 40));
      } else {
        setFilteredMovies(movies);
      }
    } else {
      getMovies();
    }

    if (localStorage.getItem('isShortFilm')) {
      setIsShortFilm(JSON.parse(localStorage.getItem('isShortFilm', isShortFilm)))
    }

  }, []);

  useEffect(() => {
    getMovies();
  }, [isShortFilm])

  useEffect(() => {
    localStorage.setItem('searchRequest', searchRequest)
  }, [searchRequest])

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
            savedMovies={savedMovies}
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
