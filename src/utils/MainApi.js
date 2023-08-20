import makeRequest from './makeRequest'

const createMovieCard = ({ ...card }, token) => {
  return makeRequest('/movies', 'POST', { ...card }, token)
}

const deleteMovieCard = (cardId, token) => {
  return makeRequest(`/movies/${cardId}`, 'DELETE', null, token)
}

const getMovies = (token) => {
  return makeRequest('/movies', 'GET', null, token)
}

export { getMovies, createMovieCard, deleteMovieCard }
