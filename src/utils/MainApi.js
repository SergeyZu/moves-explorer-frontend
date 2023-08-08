import { BASE_URL } from '../constants/constants'

class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl
    this._headers = config.headers
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  // register({ name, email, password }) {

  // register(name, email, password) {
  //   return this._request(`${this._baseUrl}/signup`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({ name, email, password }),
  //   })
  // }
}

const apiConfig = {
  // baseUrl: 'http://localhost:3000',
  baseUrl: BASE_URL,
  headers: {
    // authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
}

const mainApi = new MainApi(apiConfig)

export { mainApi }

//   // setToken(token) {
//   //   this._headers.Authorization = `Bearer ${token}`;
//   // }

//   // // Запрос на получение данных пользователя
//   // getUserData() {
//   //   return this._request(`${this._baseUrl}/users/me`, {
//   //     headers: this._headers,
//   //   });
//   // }

//   // // Запрос на изменение данных пользователя
//   // setUserData(inputValues) {
//   //   return this._request(`${this._baseUrl}/users/me`, {
//   //     method: 'PATCH',
//   //     headers: this._headers,
//   //     body: JSON.stringify(inputValues),
//   //   });
//   // }

//   // // Запрос на добавление карточки
//   // addCard(data) {
//   //   return this._request(`${this._baseUrl}/cards`, {
//   //     method: 'POST',
//   //     headers: this._headers,
//   //     body: JSON.stringify({
//   //       name: data.name,
//   //       link: data.link,
//   //     }),
//   //   });
//   // }

//   // // Запрос на удаление карточки
//   // deleteCard(cardId) {
//   //   return this._request(`${this._baseUrl}/cards/${cardId}`, {
//   //     method: 'DELETE',
//   //     headers: this._headers,
//   //   });
//   // }
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

//
