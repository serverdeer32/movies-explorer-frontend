import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth"


export default function SavedMovies() {
  document.title = 'Сохранённые фильмы';

  return (
    <main className='main'>
      <HeaderAuth 
      name='saved-movies' />
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}
