import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'
import FormValidation from '../../hooks/FormValidation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ name, onLogin, setError, isAuth }) {
  const { values, errors, handleChange, isInputValid, isValid } = FormValidation()
  const navigate = useNavigate();

  document.title = 'Авторизация';

  useEffect(() => {
    if (isAuth) {
      navigate('/movies', { replace: true });
    }
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };

  return (

    <LoginPage name={name} onSubmit={handleSubmit} isValid={isValid} setError={setError}>
      <Input
        name="email"
        type="email"
        title="E-Mail"
        placeholder="Ваш E-Mail"
        value={values.email}
        onChange={(evt) => {
          handleChange(evt)
        }}
        error={errors.email}
        isInputValid={isInputValid.email}
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
        value={values.password}
        onChange={(evt) => {
          handleChange(evt)
        }}
        error={errors.password}
        isInputValid={isInputValid.password}
      />
    </LoginPage>
  )
}
