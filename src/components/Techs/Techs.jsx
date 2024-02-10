import './Techs.css';

function Techs() {
  return (
    <section className="technologies">
    <h2 className="technologies__title">Технологии</h2>
    <div className="technologies__container">
      <h3 className="technologies__subtitle">7 технологий</h3>
      <h4 className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.</h4>
        <ul className="technologies__list">
          <li className="technologies__list-item">
            <span className="technologies__list-name">HTML</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">CSS</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">JS</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">React</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">Git</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">Express.js</span>
          </li>
          <li className="technologies__list-item">
            <span className="technologies__list-name">mongoDB</span>
          </li>
        </ul>
    </div>
  </section>
  
  );
}

export default Techs;
