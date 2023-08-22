import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import * as auth from '../../utils/auth'
import * as mainApi from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Preloader from '../Preloader/Preloader'
import { getMovies } from '../../utils/MainApi'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(null)
  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  })
  const [likedMovies, setLikedMovies] = useState([])
  const [registrationError, setRegistrationError] = useState('')
  const [loginError, setloginError] = useState('')
  const [profileError, setProfileError] = useState('')
  const [profileSuccessMessage, setProfileSuccessMessage] = useState('')
  const navigate = useNavigate()
  const [searchRequest, setSearchRequest] = useState('')
  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setToken(jwt)
  }, [])

  useEffect(() => {
    if (!token) {
      return
    }
    setIsLoading(true)
    auth
      .getUserData(token)
      .then((user) => {
        setCurrentUser({ user })
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [token])

  const updateUserInfo = ({ email, name }) => {
    auth
      .updateUserData(email, name, token)
      .then((user) => {
        setCurrentUser({ user })
        setIsLoggedIn(true)
        setProfileSuccessMessage('Данные профиля успешно обновлены')
      })
      .catch((err) => {
        console.log(err)
        setProfileError('При обновлении профиля произошла ошибка')
      })
  }

  const registerUser = ({ name, email, password }) => {
    setIsLoading(true)
    auth
      .register(name, email, password)
      .then((res) => {
        console.log(res)
        loginUser({ email, password })
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
        setRegistrationError('Ошибка регистрации')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loginUser = ({ email, password }) => {
    setIsLoading(true)
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
      .finally(() => {
        setIsLoading(false)
      })
  }

  const logOut = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    setToken('')
    setCurrentUser({
      name: '',
      email: '',
    })
    navigate('/')
  }

  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }

  const createCard = async (card) => {
    try {
      const likedMovieCard = await mainApi.createMovieCard(
        {
          country: card.country,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `https://api.nomoreparties.co${card.image.url}`,
          trailerLink: card.trailerLink,
          thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
          movieId: card.id,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
        },
        token,
      )
        setSavedMovies([...savedMovies, likedMovieCard])
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, likedMovieCard]))
    } catch (err) {
      console.log(err)
    }
  }

  const deleteCard = async (card) => {
    try {
      // const cardToDeleted = likedMovies.find(
      const cardToDeleted = savedMovies.find(
        (cardToDel) => cardToDel.movieId === (card.id || card.movieId),
      )
      await mainApi.deleteMovieCard(cardToDeleted._id, token)
      // const refreshedLikedMovies = likedMovies.filter(
      const updatedSavedMovies = savedMovies.filter(
        (card) => card._id !== cardToDeleted._id,
      )
      // setLikedMovies(updatedSavedMovies)
      setSavedMovies(updatedSavedMovies)
      // localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
    } catch (error) {
      console.log(error)
    }
  }

  const getSavedMovies = async () => {
    // setIsLoading(true)
    try {
      const savedMovies = await getMovies(token)
      if (savedMovies) {
        setSavedMovies(savedMovies)
      }
    } catch (err) {
      console.log(err)
    }
    // setIsLoading(false)
  }

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn])

  return (
    <div className='app'>
      {isLoading ? (
        <div className='app-preloader'>
          <Preloader />
        </div>
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  component={Movies}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  searchRequest={searchRequest}
                  setSearchRequest={setSearchRequest}
                  handleInputChange={handleInputChange}
                  createCard={createCard}
                  deleteCard={deleteCard}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  token={token}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  likedMovies={likedMovies}
                  searchRequest={searchRequest}
                  setSearchRequest={setSearchRequest}
                  handleInputChange={handleInputChange}
                  deleteCard={deleteCard}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  logOut={logOut}
                  updateUserInfo={updateUserInfo}
                  errorMessage={profileError}
                  profileSuccessMessage={profileSuccessMessage}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  loginUser={loginUser}
                  errorMessage={loginError}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  registerUser={registerUser}
                  errorMessage={registrationError}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  )
}

export default App
