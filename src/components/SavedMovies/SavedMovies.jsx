import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback, useEffect, useState } from "react";

export default function SavedMovies({ savedMovies, handleDelete }) {
  document.title = 'Сохранённые фильмы';

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState();
  const [searchedFilms, setSearchedFilms] = useState([]);
  const notFound = (searchedFilms.length === 0 && searchQuery !== "");

  const films = useCallback((search, movies) => {
    setSearchQuery(search)
    setSearchedFilms(movies.filter(movie => {
      const isMatchQuery = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
      const isMatchDuration = movie.duration <= 40;

      return filter ? isMatchQuery && isMatchDuration : isMatchQuery;
    })
    )
  }, [filter, searchQuery])

  useEffect(() => {
    films(searchQuery, savedMovies)
  }, [savedMovies, searchQuery, filter, films])

  function handleSearch(query) {
    localStorage.setItem('search', query);
    setSearchQuery(query);
    films(query, savedMovies)
  }

  function handleFilter() {
    localStorage.setItem('filter', !filter);
    setFilter(!filter);
  }

  return (
    <main className='main'>
      <SearchForm
        onSearch={handleSearch}
        onFilter={handleFilter}
        search={searchQuery}
        filter={filter} />
      {notFound && <p className="movies__error">Ничего не найдено</p>}
      <MoviesCardList handleDelete={handleDelete} savedMovies={savedMovies} movies={searchedFilms} />
    </main>
  )
}
