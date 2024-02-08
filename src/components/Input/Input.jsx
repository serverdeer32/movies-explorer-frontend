import "./Input.css";

export default function Input({ title, name, placeholder, error, type }) {
  return (
    <>
      <label className="login__label">
        <span className="login__input-name">{title}</span>
        <input
          className="login__input"
          placeholder={placeholder}
          type={type}
          name={name}
          minLength={3}
        />
      </label>
      <span className="login__error">{error}</span>
    </>
  )
}
