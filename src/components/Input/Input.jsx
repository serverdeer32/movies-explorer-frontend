import "./Input.css";

export default function Input({ title, name, placeholder, error, type, onChange, value, isInputValid, pattern }) {

  return (
    <>
      <label className="login__label">
        <span className="login__input-name">{title}</span>
        <input
          className={`login__input ${isInputValid ? '' : 'login__input_invalid'}`}
          placeholder={placeholder}
          type={type}
          name={name}
          minLength={3}
          value={value || ''}
          onChange={onChange}
          pattern={pattern}
          required  
        />
        <span className="login__error">{error}</span>
      </label>
    </>
  )
}
