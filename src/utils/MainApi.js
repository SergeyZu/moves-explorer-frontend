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

// import { BASE_URL } from '../constants/constants'

// class MainApi {
//   constructor(config) {
//     this._baseUrl = config.baseUrl
//     this._headers = config.headers
//   }

//   _request(url, options) {
//     return fetch(url, options).then(this._handleResponse)
//   }

//   _handleResponse(res) {
//     if (res.ok) {
//       return res.json()
//     }
//     return Promise.reject(`Ошибка: ${res.status}`)
//   }
// }

// const apiConfig = {
//   // baseUrl: 'http://localhost:3000',
//   baseUrl: BASE_URL,
//   headers: {
//     // authorization: `Bearer ${localStorage.getItem('token')}`,
//     'Content-Type': 'application/json',
//   },
// }

// const mainApi = new MainApi(apiConfig)

// export { mainApi }
