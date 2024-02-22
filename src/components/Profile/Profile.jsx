import './Profile.css';
import { Link } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import FormValidation from '../../hooks/FormValidation.js';
import { useContext, useState, useEffect } from 'react';
import apiMain from '../../utils/MainApi';

export default function Profile({ onSignOut }) {
  const { values, errors, handleChange, isValid, setValue } = FormValidation()

  document.title = 'Профиль';

  const user = useContext(CurrentUserContext)
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue('username', user.name);
    setValue('email', user.email);
  }, [user, setValue]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    apiMain.setUserInfo(values.username, values.email, localStorage.getItem("jwt"))
      .then(() => {
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(`Ошибка при редактировании данных пользователя: ${err}`)
      })
      .finally(() => console.log('Данные успешно сохранены'))
  };

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <main className='main'>
        <section className="profile">
          <h1 className='profile__title'>Привет, {values.username}!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__item">
              <span className="profile__span">Имя</span>
              <input
                minLength={3}
                className='profile__info'
                name="username"
                type="text"
                value={values.username ? values.username : ''}
                disabled={!isEditing}
                onChange={(evt) => {
                  handleChange(evt)
                  }
                }
                required
              />
            </label>
            <span className='profile__error'>{errors.username}</span>

            <label className="profile__item">
              <span className="profile__span">E-Mail</span>
              <input
                className='profile__info'
                placeholder="email"
                name="email"
                type="email"
                value={values.email ? values.email : ''}
                disabled={!isEditing}
                onChange={(evt) => {
                  handleChange(evt)
                  }
                }
              />
            </label>
            <span className='profile__error'>{errors.email}</span>

            {!isEditing ? <button onClick={handleEditClick} className='profile__edit-link'>Редактировать</button> : (
              <button onClick={handleSave} className={`profile__edit-link ${isValid ? '' : 'profile__edit-link_disabled'}`} disabled={!isValid}>Сохранить</button>
            )}</form>
          <Link onClick={onSignOut} className="profile__logout" to="/">Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  );
}
