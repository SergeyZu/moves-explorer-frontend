import { SHORT_FILM_DURATION } from '../constants/constants'

const filterMovies = (movies, searchRequest, isShortFilm) => {
  // const filterMovies = (movies) => {
  const filterMoviesbyRequest = () => {
    const filteredMoviesbyRequest = movies.filter((movie) => {
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

export default filterMovies
