import './AboutMe.css'
import Photo from '../../images/photo.jpeg'

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__column">
          <h3 className="student__name">Алексей</h3>
          <span className="student__job">Фронтенд-разработчик, 29 лет</span>
          <p className="student__about">
            Я родился и живу в Серпухове. Закончил Серпуховский Радиотехнический Колледж, с момента учебы увлёкся разработкой сайтов и SMM.
            Я люблю слушать музыку, видеоигры и автомобили. Ещё несколько лет назад начинал учиться делать сайты самостоятельно, 
            в следствие чего запустил собственный игровой портал и чуть позже музыкальный сайт, а также писал кастомные модули для uCoz.
            После окончания курса по веб-разработке начал заниматься фриланс-заказами и полностью погрузился в эту сферу.
          </p>
          <a href="https://github.com/serverdeer32" target="_blank" className="student__github">
            GitHub
          </a>
        </div>
        <div className="student__column">
          <img src={Photo} alt="Фото" className="student__photo" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
