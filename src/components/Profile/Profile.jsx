import './Profile.css';
import { Link } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import FormValidation from '../../hooks/FormValidation.js';
import { useContext, useState, useEffect } from 'react';
import apiMain from '../../utils/MainApi';
import { EmailRegex } from "../../utils/constants";
import ErrorContext from '../../contexts/ErrorContext'


export default function Profile({ onSignOut, isSuccess, setIsSuccess, setError, isSend, setIsSend, setCurrentUser }) {
  const { values, errors, handleChange, isValid, setValue } = FormValidation()

  document.title = 'Профиль';

  const user = useContext(CurrentUserContext)
  const [isEditing, setIsEditing] = useState(false);
  const error = useContext(ErrorContext)

  useEffect(() => {
    setValue('username', user.name);
    setValue('email', user.email);
  }, [user, setValue]);

  useEffect(() => {
    setIsSuccess(false);
    setIsEditing(false);
  }, [setIsSuccess, setIsEditing])


  const handleEditClick = () => {
    setIsEditing(true);
    setIsSuccess(false);
  };

  const handleSave = () => {
    setIsSend(true)
    apiMain.setUserInfo(values.username, values.email, localStorage.getItem("jwt"))
      .then((res) => {
        setIsEditing(false);
        setIsSuccess(true);
        setError(false);
        setCurrentUser(res)
      })
      .catch((err) => {
        setError(true)
        console.error(`Ошибка при редактировании данных пользователя: ${err}`)
      })
      .finally(() => setIsSend(false))
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
                placeholder='Имя пользователя'
                value={values.username ? values.username : ''}
                disabled={!isEditing || isSend}
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
                placeholder="user@domain.com"
                name="email"
                type="email"
                value={values.email ? values.email : ''}
                disabled={!isEditing || isSend}
                pattern={EmailRegex}
                onChange={(evt) => {
                  handleChange(evt)
                }
                }
              />
            </label>
            <span className='profile__error'>{errors.email}</span>

            <span className={`profile__error-edit ${error ? 'profile__error-edit_visible' : isSuccess && 'profile__error_success'}`}>{error ? 'Не удалось сохранить профиль' : 'Данные профиля обновлены'}</span>

            {!isEditing
              ?
              <button onClick={handleEditClick} className='profile__edit-link'>Редактировать</button>
              :
              <button onClick={handleSave}
                className={`profile__edit-link ${(values.username === user.name && values.email === user.email) || !isValid || error ? 'profile__edit-link_disabled' : ''}`}
                disabled={!isValid || isSend || error}
              >{isSend ? 'Сохранение...' : 'Сохранить'}</button>
            }

          </form>
          <Link onClick={onSignOut} className="profile__logout" to="/">Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  );
}
