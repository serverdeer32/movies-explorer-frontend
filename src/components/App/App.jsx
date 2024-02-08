import { Route, Routes } from 'react-router-dom';

import './App.css';
import HeaderUnauth from '../HeaderUnauth/HeaderUnauth.jsx';
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Movies from '../Movies/Movies.jsx'
import Error from '../Error/Error.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
import Profile from '../Profile/Profile.jsx'
import SavedMovies from '../SavedMovies/SavedMovies.jsx'

function App() {
  return (
    <div className="page__container">
      <CurrentUserContext.Provider>
        <Routes>
          <Route path='/' element={
            <>
              <HeaderUnauth />
              <Main />
              <Footer />
            </>
          } />

          <Route path='/movies' title='Кинцо' element={
            <>
              <Movies />
              <Footer />
            </>
          } />

          <Route path='/saved-movies' element={
            <>
              <SavedMovies />
              <Footer />
            </>
          } />
          <Route path='/profile' element={
            <Profile />
          } />

          <Route path='/signin' element={
            <Login name='signin' />
          } />

          <Route path='/signup' element={
            <Register name='signup' />
          } />

          <Route path='*' element={
            <Error />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
