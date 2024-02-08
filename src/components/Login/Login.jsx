import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'

export default function Login({ name }) {
  document.title = 'Авторизация';

  return (

    <LoginPage name={name}>
      <Input
        name="email"
        type="email"
        title="E-Mail"
        placeholder="Ваш E-Mail"
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
      />
    </LoginPage>
  )
}
