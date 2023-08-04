import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
import searchRequestHandler from '../../utils/searchRequestHandler'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'

function Movies({ isLoggedIn }) {
  const [searchRequest, setSearchRequest] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [foundMovies, setFoundMovies] = useState([])
  const [shortMovies, setShortMovies] = useState([])
  const [isFilterOn, setIsFilterOn] = useState(false)

  localStorage.setItem('isShortFilm', isFilterOn)
  // const [isShortFilm, setIsShortFilm] = useState(
  //   JSON.parse(localStorage.getItem('isShortFilm')),
  // )

  // console.log('isShortFilm', isFilterOn)
  // const [allMovies, setAllMovies] = useState(localStorage.getItem('allMovies'))

  // useEffect(() => {
  //   handleRequest()
  // }, [])

  // useEffect(() => {
  //   handleRequest()
  //   filterShortMoviesHandler()
  // }, [isFilterOn])

  const getMoviesFromServer = () => {
    setIsLoading(true)
    moviesApi
      .getAllMovies()
      .then((data) => {
        const moviesArr = JSON.stringify(data)
        localStorage.setItem('allMovies', moviesArr)
        // setFoundMovies(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  async function handleRequest() {
    try {
      if (searchRequest !== '') {
        localStorage.setItem('searchRequest', searchRequest)
        localStorage.getItem('allMovies') === null &&
          (await getMoviesFromServer())
        setFoundMovies(searchRequestHandler(searchRequest))
      }
    } catch (err) {
      console.log(err)
    }
  }

  const filterShortMovies = (movies) => {
    return movies.filter((movie) => {
      return movie.duration <= 40
    })
  }

  const filterShortMoviesHandler = () => {
    setShortMovies(filterShortMovies(foundMovies))
  }

  // const handleRequest = () => {
  //   if (searchRequest !== '') {
  //     localStorage.setItem('searchRequest', searchRequest)
  //     setIsLoading(true)
  //     moviesApi
  //       .getAllMovies(searchRequest)
  //       .then((data) => {
  //         setFoundMovies(data)
  //         // console.log(foundMovies)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => {
  //         setIsLoading(false)
  //       })
  //   }
  // }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    handleRequest()
  }

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
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
          <ShowMoreButton movies={foundMovies} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
