import './MoviesCard.css'
import apiMain from "../../utils/MainApi";
import { useLocation } from 'react-router-dom'


function MoviesCard({ movie, savedMovies, handleLike, handleDelete }) {
  const { pathname } = useLocation()

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  }
  const isLiked = !!savedMovies.find(s => s.movieId === movie.id)

  function handleLikeClick() {
    const token = localStorage.getItem('jwt');
    if (isLiked) {
      const mov = savedMovies.find(el => el.movieId === movie.id)
      apiMain.deleteMovie(mov._id, token)
      handleLike(movie.id, true)
    } else {
      apiMain.addMovie(movie, token).then((res) => handleLike(res, false))
    }
  }

  return (
    <li className="movies__list-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          className="movies__list-image"
          alt={movie.nameRU}
        />
      </a>
      <div className="movies__list-container">
        <div className="movies__list-info">
          <p className="movies__list-title">{movie.nameRU}</p>
          {pathname === '/movies' ?
            <button type="button" onClick={handleLikeClick} className={`movies__list-save ${!isLiked ? "movies__list-unsave" : ""}`} />
            :
            <button type='button' className={`movies__list-save movies__list-delete`} onClick={() => handleDelete(movie._id)}></button>
          }
        </div>
        <span className="movies__list-time">{formatTime(movie.duration)}</span>
      </div>
    </li>
  );
}


export default MoviesCard;
