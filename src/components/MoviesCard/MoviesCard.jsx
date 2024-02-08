import './MoviesCard.css'

function MoviesCard() {

  return (
      <li className="gallery__card">
        <a href="https://www.youtube.com/watch?v=9vRq-koLaWk" target="_blank">
          <img
            src="https://api.nomoreparties.co/uploads/552242179_1280x720_66bc43b289.jpeg"
            className="gallery__image"
          />
        </a>
        <div className="gallery__card-container">
          <div className="gallery__text-container">
            <p className="gallery__subtitle">33 слова о дизайне</p>
            <button type="button" className="gallery__save " />
          </div>
          <span className="gallery__time">100 часов</span>
        </div>
      </li>
  );
}

export default MoviesCard;
