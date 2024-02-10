import './Profile.css';
import { Link } from "react-router-dom";
import HeaderAuth from '../HeaderAuth/HeaderAuth';

export default function Profile() {
  document.title = 'Профиль';

  return (
    <>
      <HeaderAuth name='profile' />
      <main className='main'>
        <section className="profile">
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <div className="profile__item">
            <span className="profile__span">Имя</span>
            <span className="profile__info">Виталий</span>
          </div>
          <div className="profile__item">
            <span className="profile__span">E-Mail</span>
            <span className="profile__info">pochta@yandex.ru</span>
          </div>

          <Link to='/profile' className='profile__edit-link'>Редактировать</Link>
          <Link to='/' className='profile__logout'>Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  );
}
