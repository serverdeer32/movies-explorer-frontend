import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth"


export default function Movies() {
  document.title = 'Фильмы';

  return (
    <main className='main'>
      <HeaderAuth 
      name='movies' />
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}
