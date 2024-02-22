import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesList({ movies, savedMovies, handleLike, handleDelete }) {

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
      ) : (<p className="movies__error">Ничего не найдено</p>)}
    </div>

  );
}

export default MoviesList;
