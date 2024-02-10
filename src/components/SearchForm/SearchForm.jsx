import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className='search'>
      <form noValidate className='search__form'>
        <div className='search__form-container'>
          <input
            type="text"
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
          />
          <button type='submit' className='search__submit'>Найти</button>
        </div>

        <label className="search__form-checkbox-container">
          <div className="search__form-checkbox-input">
            <input type="checkbox" />
            <div className="search__form-checkbox-slider">
              <div className="search__form-checkbox-knob" />
            </div>
          </div>
          <span className="search__form-checkbox-name">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
