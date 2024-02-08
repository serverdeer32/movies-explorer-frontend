import './Portfolio.css'

function Portfolio() {
  return (
      <section className="portfolio">
        <h4 className="student__portfolio-title">Портфолио</h4>
        <nav className="students__portfolio-nav">
          <a href="https://github.com/serverdeer32/how-to-learn" target="_blank" className="student__portfolio-link">
            <span className="student__portfolio-link-name">Статичный сайт</span>
            <span className="student__portfolio-link-name">↗</span>
          </a>
          <a href="https://github.com/serverdeer32/russian-travel" target="_blank" className="student__portfolio-link">
            <span className="student__portfolio-link-name">Адаптивный сайт</span>
            <span className="student__portfolio-link-name">↗</span>
          </a>
          <a href="https://github.com/serverdeer32/react-mesto-api-full-gha" target="_blank" className="student__portfolio-link">
            <span className="student__portfolio-link-name">
              Одностраничное приложение
            </span>
            <span className="student__portfolio-link-name">↗</span>
          </a>
        </nav>
      </section>
   );
}

export default Portfolio;
