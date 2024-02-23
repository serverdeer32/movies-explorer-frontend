import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState, useCallback } from "react";
import { useResize } from "../../hooks/useResize";
import './Movies.css'
import { getConfig } from '../../utils/constants'
import Preloader from "../Preloader/Preloader";

export default function Movies({ savedMovies, handleLike, setError }) {
  const deviceWidth = useResize();

  const [allMovies, setAllMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(false);
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesShowed, setMoviesShowed] = useState(() => getConfig(deviceWidth)[0]);
  const [serverError, setServerError] = useState('')

  const displayMovies = searchedFilms.slice(0, moviesShowed);

  document.title = 'Фильмы';

  const search = useCallback((query, filter, movies) => {
    setSearchQuery(query)

    localStorage.setItem('query', JSON.stringify(query))
    localStorage.setItem('shorts', JSON.stringify(filter))
    localStorage.setItem('movies', JSON.stringify(movies))

    setSearchedFilms(movies.filter((movie) => {
      const isMatchQuery = movie.nameRU.toLowerCase().includes(query.toLowerCase()) || movie.nameEN.toLowerCase().includes(query.toLowerCase());
      const isMatchDuration = movie.duration <= 40;
      return filter ? isMatchQuery && isMatchDuration : isMatchQuery;
    })
    )
  }, [])

  function findMovies(query) {
    if (!allMovies.length) {
      setIsLoading(true)
      moviesApi.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsLoading(false)
          setServerError(false)
          setFilter(false)
          search(query, filter, res)
        })
        .catch((err) => {
          setServerError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.error(`Ошибка загрузки данных ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      search(query, filter, allMovies)

    }
  }

  useEffect(() => {
    if (localStorage.query && localStorage.shorts && localStorage.movies) {

      const query = JSON.parse(localStorage.query);
      const shorts = JSON.parse(localStorage.shorts);
      const movies = JSON.parse(localStorage.movies);

      setServerError(false)
      setSearchQuery(query)
      setFilter(shorts)
      setAllMovies(movies)
      search(query, shorts, movies)
    }
  }, [search])

  useEffect(() => {
    const step = getConfig(deviceWidth)[1];
    setMoviesShowed(prev => prev - prev % step);
  }, [deviceWidth])

  const handleShowMore = () => {
    setMoviesShowed(moviesShowed + getConfig(deviceWidth)[1]);
  }

  return (
    <>
      <main className='main'>
        <SearchForm
          filter={filter}
          findMovies={findMovies}
          searchQuery={searchQuery}
          setError={setError}
          allMovies={allMovies}
          search={search}
          setFilter={setFilter}
          setSearchQuery={setSearchQuery}
        />
        {serverError && <p className="movies__error">{serverError}</p>}
        {isLoading ? <Preloader /> :
          <MoviesCardList
            serverError={serverError}
            handleLike={handleLike}
            savedMovies={savedMovies}
            movies={displayMovies} />}
        {searchedFilms.length > displayMovies.length && <button className="movies__more-button" onClick={handleShowMore}>Ещё</button>}
      </main>
    </>
  )
}
