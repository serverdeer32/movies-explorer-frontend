import "./LoginPage.css";
import { Link } from 'react-router-dom'

export default function LoginPage({ name, children, isValid }) {
  return (
    <main className='main'>
      <section className="login">
        <Link to={'/'} className="login__logo"></Link>
        <h1 className='login__title'>
          {name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}
        </h1>

        <form
          name="profile"
          noValidate
          method="POST"
          className="login__form"
        >
          <div className="login__form-inputs">
            {children}
          </div>
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
    </main>
  )
}
