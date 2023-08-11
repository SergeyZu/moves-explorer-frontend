import makeRequest from './makeRequest'

// const createMovieCard = ({ ...card }) => {
//   return makeRequest('/movies', 'POST', {
//      ...card
//     }, null)
// }

const createMovieCard = (
  {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  },
  token,
) => {
  return makeRequest(
    '/movies',
    'POST',
    {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    },
    token,
  )
}

const deleteMovieCard = (cardId, token) => {
  return makeRequest(`/movies/${cardId}`, 'DELETE', null, token)
}

const getMovies = () => {
  return makeRequest('/movies', 'GET', null, null)
}

export { getMovies, createMovieCard, deleteMovieCard }
