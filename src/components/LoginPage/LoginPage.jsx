import "./LoginPage.css";
import { Link } from 'react-router-dom'
import ErrorContext from '../../contexts/ErrorContext';
import { useContext, useEffect } from "react";


export default function LoginPage({ name, children, onSubmit, isValid, setError }) {
  const error = useContext(ErrorContext)

  useEffect(() => {
    setError(false)
  }, [setError])

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
          onSubmit={onSubmit}
          className="login__form"
          method="POST"
        >
          {children}

          <button disabled={!isValid} type="submit" className="login__submit">
            {name === 'signin' ? 'Войти' : 'Зарегистрироваться'}
          </button>
          {name === 'signin' ?
            <span className={`login__auth-error ${error && 'login__auth-error_active'}`}>{'Неправильный логин или пароль.'}</span>
            :
            <span className={`login__auth-error ${error && 'login__auth-error_active'}`}>{'При регистрации произошла ошибка.'}</span>
          }

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
