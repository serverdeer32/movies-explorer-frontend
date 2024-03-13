import './HeaderAuth.css';
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function HeaderAuth({ name }) {

  const [isOpen, setIsOpen] = useState(false)

  function handelClick() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <header className={name !== 'promo' ? 'header header_transparent' : 'header '}>
      <Link to={'/'} className="header__logo"></Link>

      <nav className={`header__navigation-container ${isOpen ? 'header__navigation-container_open' : ''}`}>

        <ul className="header__navigation header__navigaton-mobile">

          <li className='header__navigation-item'>
            <Link to={'/'} className='header__navigation-link'>
              Главная
            </Link>
          </li>

          <li className='header__navigation-item'>
            <Link to={'/movies'} className={`header__navigation-link ${name !== 'movies' ? '' : 'header__navigation-link_active'}`}>
              Фильмы
            </Link>
          </li>

          <li className='header__navigation-item'>
            <Link to={'/saved-movies'} className={`header__navigation-link ${name !== 'saved-movies' ? '' : 'header__navigation-link_active'}`}>
              Сохранённые фильмы
            </Link>
          </li>
          <li className='header__navigation-item'>
            <Link to={'/profile'} className='header__profile-mobile'>
              <span className="header__profile-span">Аккаунт</span>
              <div className="header__profile-icon" />
            </Link>
          </li>
        </ul>

        <button type='button' className='header__burger-close' onClick={handelClick}></button>

      </nav>

      <Link to={'/profile'} className='header__profile'>
        <span className="header__profile-span">Аккаунт</span>
        <div className="header__profile-icon" />
      </Link>


      <button type='button' className='header__burger' onClick={handelClick}></button>
    </header>

  );
}
