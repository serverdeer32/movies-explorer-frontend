import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'

function MoviesList({ movies, savedMovies, handleLike, handleDelete, serverError, firstSearch }) {
  const { pathname } = useLocation()

  return (

    <div className="movies">
      {movies.length > 0 ? (
        <ul className="movies__list">
          {movies.map(el => {
            return (
              <MoviesCard
                handleLike={handleLike}
                handleDelete={handleDelete}
                savedMovies={savedMovies}
                movie={el}
                key={el.id} />
            )
          })}
        </ul>
      ) : serverError ? <p className="movies__error">{serverError}</p>
        : !firstSearch ? <p className="movies__error">Ничего не найдено</p>
        : pathname === '/movies' ? <p className="movies__error">Выполните поиск, чтобы увидеть список фильмов</p>
        : <p className="movies__error">Нет сохраненных фильмов</p>
        }
    </div>

  );
}

export default MoviesList;
