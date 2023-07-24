import { useState, useEffect } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies() {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('effect')
  }, [searchQuery])

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='movies__container'>
          <SearchForm
            placeholder='Введите название фильма'
            handleChange={(evt) => console.log(evt.target.value)}
            handleClick={() => setSearchQuery('фильм')}
          />
          <div>{searchQuery}</div>
          {/* <MoviesCardList>{searchQuery}</MoviesCardList> */}
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
