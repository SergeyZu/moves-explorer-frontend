import makeRequest from './makeRequest'

const createMovieCard = ({ ...card }, token) => {
  return makeRequest('/movies', 'POST', { ...card }, token)
}

const deleteMovieCard = (cardId, token) => {
  return makeRequest(`/movies/${cardId}`, 'DELETE', null, token)
}

const getMovies = () => {
  return makeRequest('/movies', 'GET', null, null)
}

export { getMovies, createMovieCard, deleteMovieCard }
