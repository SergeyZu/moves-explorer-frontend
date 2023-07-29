import { MOVIES_URL } from '../constants/constants'

class MoviesApi {
  getAllMovies() {
    return fetch(MOVIES_URL).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
}

const moviesApi = new MoviesApi()

export default moviesApi
