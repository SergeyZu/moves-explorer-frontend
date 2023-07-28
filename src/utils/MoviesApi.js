class MoviesApi {
  getAllMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
}

const moviesApi = new MoviesApi()

export default moviesApi
