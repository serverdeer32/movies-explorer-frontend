import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'
import FormValidation from '../utils/FormValidation';

export default function Register({ name }) {
  const { values, errors, handleChange, isInputValid } = FormValidation()

  document.title = 'Регистрация';

  return (

    <LoginPage name={name}>
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
      />
    </LoginPage>
  )
}
