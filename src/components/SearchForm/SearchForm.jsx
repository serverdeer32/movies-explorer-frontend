import './SearchForm.css'
import { useContext } from "react";
import ErrorContext from '../../contexts/ErrorContext';

export default function SearchForm({ filter, searchQuery, setError, allMovies, search, setFilter, findMovies, setSearchQuery }) {
  const error = useContext(ErrorContext)

  function handleSearch(e) {
    e.preventDefault()
    if (e.target.search.value) {
      findMovies(e.target.search.value)
      setError(false)
    } else {
      setError(true)
    }
  }

  function toggleShorts() {
    if (filter) {
      setFilter(false)
      search(searchQuery, filter, allMovies)
    } else {
      setFilter(true)
      search(searchQuery, filter, allMovies)
    }
  }

  return (
    <section className='search'>
      <form noValidate className='search__form' autoComplete='off' onSubmit={handleSearch}>
        <span className='search__form-container'>
          <input
            type="text"
            autoComplete='off'
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setError(false)
            }
            }
          />
          <button type='submit' className='search__submit'>Найти</button>
        </span>
        {
          error && <span className='search__error'>Нужно ввести ключевое слово</span>
        }

        <label className="search__form-checkbox-container">
          <span className="search__form-checkbox-input">
            <input type="checkbox" checked={filter} onChange={() => toggleShorts()} />
            <span className="search__form-checkbox-slider">
              <span className="search__form-checkbox-knob" />
            </span>
          </span>
          <span className="search__form-checkbox-name">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
