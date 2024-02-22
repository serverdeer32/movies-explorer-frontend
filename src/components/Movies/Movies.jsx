import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import './Movies.css'
import { getConfig } from '../../utils/constants'
import Preloader from "../Preloader/Preloader";


export default function Movies({ savedMovies, handleLike }) {
  const localStorageSearch = localStorage.getItem('search') || "";
  const localStorageFilter = JSON.parse(localStorage.getItem('filter') || "false");
  const [allMovies, setAllMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(localStorageSearch);
  const [filter, setFilter] = useState(localStorageFilter);
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const deviceWidth = useResize();
  const [moviesShowed, setMoviesShowed] = useState(() => getConfig(deviceWidth)[0]);
  const [serverError, setServerError] = useState('')

  const displayMovies = searchedFilms.slice(0, moviesShowed);

  document.title = 'Фильмы';

  useEffect(() => {
    function films() {
      if (!allMovies.length) {
        setIsLoading(true);
        moviesApi.getMovies(localStorage.jwt)
          .then((res) => {
            setIsLoading(false);
            setAllMovies(res);
            setServerError(false);
          })
          .catch((err) => {
            setServerError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            console.error(`Ошибка загрузки данных ${err}`)
          })
          .finally(() => setIsLoading(false))
      }

      setSearchedFilms(allMovies.filter(movie => {
        const isMatchQuery = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
        const isMatchDuration = movie.duration <= 40;
        return filter ? isMatchQuery && isMatchDuration : isMatchQuery;
      }))
    }
    films();
  }, [searchQuery, filter, allMovies])


  useEffect(() => {
    const step = getConfig(deviceWidth)[1];
    setMoviesShowed(prev => prev - prev % step);
  }, [deviceWidth])

  function handleSearch(query) {
    localStorage.setItem('search', query);
    setSearchQuery(query);
  }

  function handleFilter() {
    localStorage.setItem('filter', !filter);
    setFilter(!filter);
  }

  const handleShowMore = () => {
    setMoviesShowed(moviesShowed + getConfig(deviceWidth)[1]);
  }

  return (
    <>
      <main className='main'>
        <SearchForm
          onSearch={handleSearch}
          onFilter={handleFilter}
          search={searchQuery}
          filter={filter}
        />
        {serverError && <p className="movies__error">{serverError}</p>}
        {isLoading ? <Preloader /> :
          <MoviesCardList isLoading={isLoading} serverError={serverError} handleLike={handleLike} savedMovies={savedMovies} movies={displayMovies} />}

        {searchedFilms.length > displayMovies.length && <button className="movies__more-button" onClick={handleShowMore}>Ещё</button>}
      </main>
    </>
  )
}
