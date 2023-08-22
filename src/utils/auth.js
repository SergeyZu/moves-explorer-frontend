import makeRequest from './makeRequest'

const register = (name, email, password) => {
  return makeRequest('/signup', 'POST', { name, email, password }, null)
}

const authorize = (email, password) => {
  return makeRequest('/signin', 'POST', { email, password }, null)
}

const getUserData = (token) => {
  return makeRequest('/users/me', 'GET', null, token)
}

const updateUserData = (email, name, token) => {
  return makeRequest('/users/me', 'PATCH', { email, name }, token)
}

export { register, authorize, getUserData, updateUserData }
