const BASE_URL = 'http://localhost:3000'

// import { BASE_URL } from '../constants/constants'

const makeRequest = (url, method, body, token) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }

  return fetch(`${BASE_URL}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(`Ошибка. Код ${res.status}`)
  })
}

const register = (name, email, password) => {
  return makeRequest('/signup', 'POST', { name, email, password }, null)
}

const authorize = (email, password) => {
  return makeRequest('/signin', 'POST', { email, password }, null)
}

const getUserData = (token) => {
  return makeRequest('/users/me', 'GET', null, token)
}

const updateUserData = (email, password) => {
  return makeRequest('/users/me', 'PATCH', { email, password }, null)
}

export { register, authorize, getUserData, updateUserData }
