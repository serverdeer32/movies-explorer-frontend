import './Promo.css';
import PromoImg from '../../images/intro_img.png';

function Promo() {
  return (
    <section className="intro">
      <div className="intro__column">
        <h1 className="intro__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <span className="intro__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </span>
        <a href="#" className="intro__button">
          Узнать больше
        </a>
      </div>
      <div className="intro__column">
        <img className="intro__img" src={PromoImg} />
      </div>
    </section>

  );
}

export default Promo;