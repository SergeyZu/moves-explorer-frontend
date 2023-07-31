import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
// import { mainApi } from '../../utils/MainApi'
import * as auth from '../../utils/auth'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [registrationError, setRegistrationError] = useState('')
  const [loginError, setloginError] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  })
  const navigate = useNavigate()

  // useEffect(() => {
  //   const jwt = localStorage.getItem('jwt')
  //   setToken(jwt)
  // }, [token])

  // useEffect(() => {
  //   if (!token) {
  //     return
  //   }
  //   auth
  //     .getUserData(token)
  //     .then((user) => {
  //       setUserData(user)
  //       // setToken(token)
  //       setIsLoggedIn(true)
  //       // navigate('/movies')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [token, navigate])

  const registerUser = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((res) => {
        console.log(res)
        loginUser({ email, password })
        setIsLoggedIn(true)
        // navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err)
        setRegistrationError('Ошибка регистрации')
      })
  }

  const loginUser = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token)
        setToken(res.token)
        setIsLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => {
        console.log(err)
        setloginError('Неправильный email или пароль')
      })
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={<ProtectedRoute component={Movies} loggedIn={isLoggedIn} />}
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute component={SavedMovies} loggedIn={isLoggedIn} />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              component={Profile}
              // userData={userData}
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path='/signin'
          element={<Login loginUser={loginUser} errorMessage={loginError} />}
        />
        <Route
          path='/signup'
          element={
            <Register
              registerUser={registerUser}
              errorMessage={registrationError}
            />
          }
        />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
