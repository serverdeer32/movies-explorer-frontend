import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Movies from '../Movies/Movies.jsx'
import Error from '../Error/Error.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
import Profile from '../Profile/Profile.jsx'
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import mainApi from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ErrorContext from '../../contexts/ErrorContext';

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(localStorage.jwt);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([])
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSend, setIsSend] = useState(false)

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getUserData(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
        .then(([userData, dataMovies]) => {
          setCurrentUser(userData)
          setLoggedIn(true)
          setSavedMovies(dataMovies)
        })
        .catch((err) => {
          console.error(`Ошибка авторизации при повторном входе ${err}`)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      localStorage.clear()
    }
  }, [loggedIn])

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка проверки токена ${err}`)
          setLoggedIn(false)
        })
    }
  }

  function handleLogin(email, password) {
    setIsSend(true)
    mainApi.login(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => {
        console.error(`Ошибка авторизации ${err}`)
        setError(err);
      })
      .finally(() => setIsSend(false))
  }

  function handleSignOut() {
    localStorage.removeItem('jwt')
    setLoggedIn(false)
  }

  function handleRegister(username, email, password) {
    setIsSend(true)
    mainApi.register(username, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.error(`Ошибка регистрации ${err}`)
        setError(err);
      })
      .finally(() => setIsSend(false))
  }

  function handleLike(data, isLiked) {
    const newArr = [...savedMovies];
    if (isLiked) {
      const ind = savedMovies.findIndex(item => item.movieId === data.id);
      newArr.splice(ind, 1);
    } else {
      newArr.push(data)
    }
    setSavedMovies(newArr);
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== movieId }))
      })
      .catch((err) => console.error(`Ошибка при удалении фильма: ${err}`))
  }

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>
        <ErrorContext.Provider value={error}>
          <Routes>
            <Route path='/' element={
              <>
                <Header isAuth={loggedIn} />
                <Main />
                <Footer />
              </>
            } />

            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={
                    <>
                      <Header isAuth={loggedIn} />
                      <Movies savedMovies={savedMovies} setError={setError} handleLike={handleLike} />
                      <Footer />
                    </>
                  }
                />
              } />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={
                    <>
                      <Header isAuth={loggedIn} />
                      <SavedMovies savedMovies={savedMovies} setError={setError} handleDelete={handleDeleteMovie} />
                      <Footer />
                    </>
                  }
                />
              } />

            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={
                    <>
                      <Header isAuth={loggedIn} />
                      <Profile
                        onSignOut={handleSignOut}
                        isSuccess={isSuccess}
                        setIsSuccess={setIsSuccess}
                        setError={setError}
                        error={error}
                        isSend={isSend}
                        setIsSend={setIsSend}
                        setCurrentUser={setCurrentUser} />

                    </>
                  }
                />
              } />


            <Route path='/signin' element={
              <Login name='signin' isAuth={loggedIn} setError={setError} error={error} onLogin={handleLogin} />
            } />

            <Route path='/signup' element={
              <Register name='signup' isAuth={loggedIn} setError={setError} error={error} onRegister={handleRegister} />
            } />

            <Route path='*' element={
              <Error />} />

          </Routes>
        </ErrorContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
