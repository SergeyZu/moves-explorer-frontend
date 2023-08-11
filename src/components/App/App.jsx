import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
// import { mainApi } from '../../utils/MainApi'
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  })
  const [likedMovies, setLikedMovies] = useState([])
  const [registrationError, setRegistrationError] = useState('')
  const [loginError, setloginError] = useState('')
  const [profileError, setProfileError] = useState('')
  const navigate = useNavigate()
  const [searchRequest, setSearchRequest] = useState('')

  // localStorage.setItem('likedMovies', JSON.stringify(likedMovies))

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setToken(jwt)
  }, [])

  useEffect(() => {
    if (!token) {
      // setIsLoading(false)
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
    setIsLoading(true)
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
      .finally(() => {
        setIsLoading(false)
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
    localStorage.clear()
    setIsLoggedIn(false)
    setToken('')
    setCurrentUser({
      name: '',
      email: '',
    })
    navigate('/')
  }

  // const handleCreateCard = (card) => {
  //   // setIsLoading(true)
  //   const likedMovieCard = mainApi
  //     .createMovieCard(
  //       {
  //         country: card.country,
  //         director: card.director,
  //         duration: card.duration,
  //         year: card.year,
  //         description: card.description,
  //         image: `https://api.nomoreparties.co${card.image.url}`,
  //         trailerLink: card.trailerLink,
  //         thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
  //         movieId: card.id,
  //         nameRU: card.nameRU,
  //         nameEN: card.nameEN,
  //       },
  //       token,
  //     )
  //     // return likedMovieCard
  //     .then(() => {
  //       // if (likedMovieCard) {
  //       // setLikedMovies(likedMovies.push(likedMovieCard))
  //       setLikedMovies([...likedMovies, likedMovieCard])
  //       // }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   // .finally(() => {
  //   // setIsLoading(false)
  //   // })
  // }
  const handleInputChange = (request) => {
    setSearchRequest(request.target.value)
  }

  const handleCreateCard = async (card) => {
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
      // return likedMovieCard
      // if (likedMovieCard) {
      setLikedMovies([...likedMovies, likedMovieCard])
      localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
      // }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteCard = async (card) => {
    try {
      const cardToDeleted = likedMovies.find(
        (cardToDel) => cardToDel.movieId === (card.id || card.movieId),
      )
      await mainApi.deleteMovieCard(cardToDeleted._id, token)
      const refreshedLikedMovies = likedMovies.filter(
        // (card) => card.id !== cardToDeleted.movieId,
        (card) => card._id !== cardToDeleted._id,
      )
      setLikedMovies(refreshedLikedMovies)
      localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
    } catch (error) {
      console.log(error)
    }
  }

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
                  handleInputChange={handleInputChange}
                  handleCreateCard={handleCreateCard}
                  handleDeleteCard={handleDeleteCard}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                  // currentUser={currentUser}
                  isLoggedIn={isLoggedIn}
                  logOut={logOut}
                  updateUserInfo={updateUserInfo}
                  errorMessage={profileError}
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
