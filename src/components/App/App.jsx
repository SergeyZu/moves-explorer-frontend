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
import Preloader from '../Preloader/Preloader'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [registrationError, setRegistrationError] = useState('')
  const [loginError, setloginError] = useState('')
  const [profileError, setProfileError] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setToken(jwt)
  }, [])

  useEffect(() => {
    if (!token) {
      // setIsLoading(false)
      return
    }
    auth
      .getUserData(token)
      .then((user) => {
        setUserData({ user })
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        // setIsLoading(false)
      })
  }, [token])

  const updateUserInfo = (userData) => {
    auth
      .updateUserData(userData)
      .then((user) => {
        setUserData({ user })
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
        setProfileError('При обновлении профиля произошла ошибка')
      })
      .finally(() => {
        // setIsLoading(false)
      })
  }

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
    setIsLoading(true)
    auth
      .authorize(email, password)
      // .then((res) => res.json())
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
      .finally(() => {
        setIsLoading(false)
      })
  }

  const logOut = () => {
    localStorage.removeItem('jwt')
    setIsLoggedIn(false)
    setToken('')
    setUserData({
      name: '',
      email: '',
    })
    navigate('/')
  }

  return (
    <div className='app'>
      {isLoading ? (
        <div className='app-preloader'>
          <Preloader />
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute component={Movies} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute component={SavedMovies} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                component={Profile}
                userData={userData}
                isLoggedIn={isLoggedIn}
                logOut={logOut}
                updateUserInfo={updateUserInfo}
                errorMessage={profileError}
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
      )}
    </div>
  )
}

export default App
