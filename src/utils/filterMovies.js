import { SHORT_FILM_DURATION } from '../constants/constants'

const filterMovies = (movies, searchRequest, isShortFilm) => {
  // фильтрация по поисковому запросу
  const filterMoviesbyRequest = () => {
    const filteredMoviesbyRequest = movies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchRequest.toLowerCase())
      )
    })
    return filteredMoviesbyRequest
  }

  // фильтрация по длительности
  const filterMoviesbyDuration = () => {
    return filterMoviesbyRequest().filter(
      (movie) => movie.duration <= SHORT_FILM_DURATION,
    )
  }

  return !isShortFilm
    ? filterMoviesbyRequest()
    : filterMoviesbyDuration(filterMoviesbyRequest())
}

export default filterMovies
