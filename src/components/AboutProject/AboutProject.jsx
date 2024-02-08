import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about" id='AboutProject'>
      <h2 className="about__title">О проекте</h2>
      <div className="about__container">
        <div className="about__column">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__column">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timing">
        <span className="about__timing-progress about__timing-progress_1week">
          1 неделя
        </span>
        <span className="about__timing-progress">4 недели</span>
        <span className="about__timing-job">Back-end</span>
        <span className="about__timing-job">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
