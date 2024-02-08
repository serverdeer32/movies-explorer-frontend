import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth"


export default function Movies() {
  document.title = 'Фильмы';

  return (
    <>
      <HeaderAuth 
      name='movies' />
      <SearchForm />
      <MoviesCardList />
    </>
  )
}
