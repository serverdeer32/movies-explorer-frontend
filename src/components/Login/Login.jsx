import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'
import FormValidation from '../utils/FormValidation';

export default function Login({ name }) {
  const { values, errors, handleChange, isInputValid } = FormValidation()


  document.title = 'Авторизация';
  return (

    <LoginPage name={name}>
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
