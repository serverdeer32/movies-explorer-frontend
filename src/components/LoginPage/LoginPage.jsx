import "./LoginPage.css";
import Logo from "../../images/logo.svg"
import { Link } from 'react-router-dom'

export default function LoginPage({ name, children }) {
  return (
    <section className="login">
      <Link to={'/'}><img src={Logo} className="login__logo" /></Link>
      <h2 className='login__title'>
        {name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}
      </h2>
      <form name="profile">
        {children}
        <button type="button" className="login__submit">
          {name === 'signin' ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
      {name === 'signin' ?
        <span className='login__span'>Ещё не зарегистрированы? <Link to={'/signup'} className='login__link'>Регистрация</Link></span>
        : name === 'signup' ?
          <span className='login__span'>Уже зарегистрированы? <Link to={'/signin'} className='login__link'>Войти</Link></span>
          :
          <Link className='login__signout' to={'/'}>Выйти из аккаунта</Link>
      }
    </section>
  )
}
