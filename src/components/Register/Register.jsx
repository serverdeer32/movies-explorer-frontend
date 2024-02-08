import LoginPage from '../LoginPage/LoginPage'
import Input from '../Input/Input'

export default function Register({ name }) {
  document.title = 'Регистрация';

  return (

    <LoginPage name={name}>
      <Input
        name="username"
        type="text"
        title="Имя"
        placeholder="Ваше имя"
      />
      <Input
        name="email"
        type="email"
        title="E-Mail"
        placeholder="Ваша почта"
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
      />
    </LoginPage>
  )
}
