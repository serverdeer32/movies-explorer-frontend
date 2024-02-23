import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'
import FormValidation from '../../hooks/FormValidation';
import { EmailRegex } from "../../utils/constants";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ name, onRegister, setError, isAuth }) {
  const { values, errors, handleChange, isInputValid, isValid } = FormValidation()
  const navigate = useNavigate();

  document.title = 'Регистрация';

  useEffect(() => {
    if (isAuth) {
      navigate('/movies', { replace: true });
    }
  }, [isAuth, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.username, values.email, values.password)
  }

  return (
    <LoginPage name={name} onSubmit={handleSubmit} isValid={isValid} setError={setError}>
      <Input
        name="username"
        type="text"
        title="Имя"
        placeholder="Ваше имя"
        value={values.username}
        onChange={(evt) => {
          handleChange(evt)
        }}
        error={errors.username}
        isInputValid={isInputValid.username}
        required
      />
      <Input
        name="email"
        type="email"
        title="E-Mail"
        placeholder="Ваша почта"
        value={values.email}
        onChange={(evt) => {
          handleChange(evt)
        }}
        error={errors.email}
        isInputValid={isInputValid.email}
        pattern={EmailRegex}
        required
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
        placeholder="Ваш пароль"
        value={values.password}
        onChange={(evt) => {
          handleChange(evt) 
        }}
        error={errors.password}
        isInputValid={isInputValid.password}
        required
      />
    </LoginPage>
  )
}
