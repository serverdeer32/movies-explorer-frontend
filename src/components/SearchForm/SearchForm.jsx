import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className='search'>
      <form noValidate className='search__form'>
        <span className='search__form-container'>
          <input
            type="text"
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
          />
          <button type='submit' className='search__submit'>Найти</button>
        </span>

        <label className="search__form-checkbox-container">
          <span className="search__form-checkbox-input">
            <input type="checkbox" />
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
