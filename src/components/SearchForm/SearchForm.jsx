import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form noValidate className='search__form'>
          <input
            type="text"
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
          />
          <button type='submit' className='search__submit'>{'Найти'}</button>
        </form>
        <FilterCheckbox  />
      </div>
    </section>
  )
}
