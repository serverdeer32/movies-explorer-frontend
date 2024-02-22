import './SearchForm.css'
import { useState } from "react";

export default function SearchForm({onSearch, onFilter, search, filter}) {
  const [searchInput, setSearchInput] = useState(search)
  const [error, setError] = useState(false);
  

  function handleSearch(e) {
    e.preventDefault()

    if (searchInput.trim() === '') {
      setError(true);
      return;
    } else {
      setError(false);
    }
    onSearch(searchInput)
  }


  return (
    <section className='search'>
      <form noValidate className='search__form' autoComplete='off'>
        <span className='search__form-container'>
          <input
            type="text"
            autoComplete='off'
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' className='search__submit' onClick={handleSearch}>Найти</button>
        </span>
        {
          error && <span className='search__error'>Нужно ввести ключевое слово</span>
        }

        <label className="search__form-checkbox-container">
          <span className="search__form-checkbox-input">
            <input type="checkbox" checked={filter} onChange={onFilter} />
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
