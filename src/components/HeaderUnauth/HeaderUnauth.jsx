import './HeaderUnauth.css';
import { Link } from "react-router-dom";


export default function HeaderUnauth() {
  return (
    <header className="header">
      <Link to={'/'} className="header__logo"></Link>
      <nav className="header__nav">
        <Link to={'/signup'} className="header__link">Регистрация</Link>
        <Link to={'/signin'} className="header__button">Войти</Link>
      </nav>
    </header>

  );
}
