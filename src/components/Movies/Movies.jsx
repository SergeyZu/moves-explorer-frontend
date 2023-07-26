import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { moviesApi } from '../../utils/MoviesApi'
import MoviesCard from '../MoviesCard/MoviesCard'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesApi.getCards().then((data) => {
      // console.log(data)
      // setMovies(data)
      setMovies(
        data.map((item) => ({
          id: item.id,
          src: item.image.url,
          title: item.nameRU,
          duration: item.duration,
        })),
      )
    })
  }, [])

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm />
          <div>
            {movies.map(({ id, ...props }) => (
              <MoviesCard key={id} {...props} />
            ))}
          </div>
          {/* <MoviesCardList data={movies} /> */}
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
