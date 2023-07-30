import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [registrationError, setRegistrationError] = useState('')
  const [loginError, setloginError] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  })

  const registerUser = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        setRegistrationError('Ошибка регистрации')
      })
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
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
