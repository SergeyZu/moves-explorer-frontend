// fetch('https://api.nomoreparties.co/beatfilm-movies')
//   .then((res) => res.json)
//   .then((data) => {
//     console.log(data)
//   })

class MoviesApi {
  getCards() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
}

const moviesApi = new MoviesApi()

export { moviesApi }
