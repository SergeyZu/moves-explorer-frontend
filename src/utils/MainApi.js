import makeRequest from './makeRequest'

const createMovieCard = (card) => {
  return makeRequest('/movies', 'POST', { ...card }, null)
}

const deleteMovieCard = (cardId) => {
  return makeRequest(`/movies/${cardId}`, 'DELETE', null, null)
}

const getMovies = () => {
  return makeRequest('/movies', 'GET', null, null)
}

export { getMovies, createMovieCard, deleteMovieCard }
