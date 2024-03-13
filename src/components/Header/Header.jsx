import './Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function Header({ isAuth }) {

  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  function handelClick() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const isTransparent = pathname !== "/";

  return !isAuth ? (<header className="header">
    <Link to={'/'} className="header__logo"></Link>
    <nav className="header__nav">
      <Link to={'/signup'} className="header__link">Регистрация</Link>
      <Link to={'/signin'} className="header__button">Войти</Link>
    </nav>
  </header>) : (
    <header className={isTransparent ? 'header header_transparent' : 'header '}>
      <Link to={'/'} className="header__logo"></Link>

      <nav className={`header__navigation-container ${isOpen ? 'header__navigation-container_open' : ''}`}>
        <ul className="header__navigation header__navigation-mobile">
          <li className='header__navigation-item'>
            <Link to={'/'} className='header__navigation-link'>
              Главная
            </Link>
          </li>

          <li className='header__navigation-item'>
            <Link to={'/movies'} className={`header__navigation-link ${pathname !== '/' ? '' : 'header__navigation-link_white'} ${pathname !== '/movies' ? '' : 'header__navigation-link_active'}`}>
              Фильмы
            </Link>
          </li>

          <li className='header__navigation-item'>
            <Link to={'/saved-movies'} className={`header__navigation-link ${pathname !== '/' ? '' : 'header__navigation-link_white'} ${pathname !== '/saved-movies' ? '' : 'header__navigation-link_active'}`}>
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

      <Link to={'/profile'} className={`header__profile ${pathname !== '/' ? '' : 'header__profile_green'}`}>
        <span className="header__profile-span">Аккаунт</span>
        <div className="header__profile-icon" />
      </Link>


      <button type='button' className='header__burger' onClick={handelClick}></button>
    </header>
  )
}
