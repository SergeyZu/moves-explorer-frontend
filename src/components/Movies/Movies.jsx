import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
import searchRequestHandler from '../../utils/searchRequestHandler'

function Movies({ isLoggedIn }) {
  const [searchRequest, setSearchRequest] = useState('')
  const [foundMovies, setFoundMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   handleRequest()
  // }, [])

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

  const handleRequest = () => {
    if (searchRequest !== '') {
      localStorage.setItem('searchRequest', searchRequest)
      localStorage.getItem('allMovies') === null && getMoviesFromServer()
      setFoundMovies(searchRequestHandler(searchRequest))
    }
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
          />
          <MoviesCardList movies={foundMovies} isLoading={isLoading} />
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
