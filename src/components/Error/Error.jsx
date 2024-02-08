import './Error.css';
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()

  return (
    <section className="error__container">
      <h1 className="error__code">404</h1>
      <p className="error__description">Страница не найдена</p>
      <a onClick={() => navigate(-1)} className='error__link'>Назад</a>
    </section>
  );
}

export default Error;
