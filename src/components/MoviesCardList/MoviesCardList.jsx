import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesList() {

  return (
    <section className="movies">
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
      <button className="gallery__more-button">Ещё</button>
    </section>


  );
}

export default MoviesList;
