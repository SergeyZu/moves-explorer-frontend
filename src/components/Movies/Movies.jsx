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

  useEffect(() => {
    moviesApi
      .getAllMovies(searchRequest)
      .then((data) => {
        setFoundMovies(data)
        // console.log(foundMovies)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [searchRequest])

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            handleChange={(evt) => console.log(evt.target.value)}
            handleClick={(evt) => {
              evt.preventDefault()
              setSearchRequest('а')
            }}
          />
          <MoviesCardList movies={foundMovies} />
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
