import './HeaderUnauth.css';
import { Link } from "react-router-dom";


export default function HeaderUnauth() {
  return (
    <header className="header">
      <Link to={'/'} className="header__logo"></Link>
      <div className="link__container">
        <Link to={'/signup'} className="header__link_white">Регистрация</Link>
        <Link to={'/signin'} className="header__button">Войти</Link>
      </div>
    </header>

  );
}
