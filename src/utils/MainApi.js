import makeRequest from './makeRequest'

const getMovies = () => {
  return makeRequest('/movies', 'GET', null, null)
}

const createMovieCard = (card) => {
  return makeRequest('/movies', 'POST', { ...card }, null)
}

const deleteMovieCard = (cardId) => {
  return makeRequest(`/movies/${cardId}`, 'DELETE', null, null)
}

export { getMovies, createMovieCard, deleteMovieCard }
