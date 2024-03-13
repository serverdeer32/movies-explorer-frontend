import './MoviesCard.css'

function MoviesCard() {

  return (
      <li className="movies__list-card">
        <a href="https://www.youtube.com/watch?v=9vRq-koLaWk" target="_blank" rel="noreferrer">
          <img
            src="https://api.nomoreparties.co/uploads/552242179_1280x720_66bc43b289.jpeg"
            className="movies__list-image"
            alt="Обложка фильма"
          />
        </a>
        <div className="movies__list-container">
          <div className="movies__list-info">
            <p className="movies__list-title">33 слова о дизайне</p>
            <button type="button" className="movies__list-save " />
          </div>
          <span className="movies__list-time">100 часов</span>
        </div>
      </li>
  );
}

export default MoviesCard;
