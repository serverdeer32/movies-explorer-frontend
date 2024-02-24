import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback, useEffect, useState } from "react";

export default function SavedMovies({ savedMovies, handleDelete, setError }) {
  document.title = 'Сохранённые фильмы';

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState();
  const [searchedFilms, setSearchedFilms] = useState(savedMovies);
  const [firstSearch, setFirstSearch] = useState(true)


  const search = useCallback((search, filter, movies) => {
    setSearchQuery(search)
    setSearchedFilms(movies.filter((movie) => {
      const isMatchQuery = movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase());
      const isMatchDuration = movie.duration <= 40;

      return filter ? isMatchQuery && isMatchDuration : isMatchQuery;
    })
    )
  }, [])

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstSearch(true)
    } else {
      setFirstSearch(false)
    }
    search(searchQuery, filter, savedMovies)
  }, [savedMovies, filter, search])

  function findMovies(query) {
    setFirstSearch(false)
    search(query, filter, savedMovies)
  }

  return (
    <main className='main'>
      <SearchForm
        filter={filter}
        findMovies={findMovies}
        searchQuery={searchQuery}
        setError={setError}
        allMovies={savedMovies}
        search={search}
        setFilter={setFilter}
        setSearchQuery={setSearchQuery}

      />
      <MoviesCardList handleDelete={handleDelete} savedMovies={savedMovies} movies={searchedFilms} firstSearch={firstSearch} />
    </main>
  )
}