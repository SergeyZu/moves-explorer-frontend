import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'

function Movies() {
  const [searchRequest, setSearchRequest] = useState('')
  const [foundMovies, setFoundMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    handleRequest()
  }, [])

  const handleRequest = () => {
    if (searchRequest !== '') {
      setIsLoading(true)
      moviesApi
        .getAllMovies(searchRequest)
        .then((data) => {
          setFoundMovies(data)
          // console.log(foundMovies)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    handleRequest()
  }

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            onInputChange={handleInputChange}
            // onInputChange={(evt) => console.log(evt.target.value)}

            onFormSubmit={handleFormSubmit}

            // onFormSubmit={(evt) => {
            //   evt.preventDefault()
            //   setSearchRequest('а')
            // }}
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
