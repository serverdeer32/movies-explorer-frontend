import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesList() {

  return (
    <div className="movies">
      <ul className="movies__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className="movies__more-button">Ещё</button>
    </div>


  );
}

export default MoviesList;
