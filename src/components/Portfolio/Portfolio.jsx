import './Portfolio.css'

function Portfolio() {
  return (
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <nav className="portfolio__nav">
          <a href="https://github.com/serverdeer32/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__nav-link">
            <span className="portfolio__nav-link-name">Статичный сайт</span>
            <span className="portfolio__nav-link-name">↗</span>
          </a>
          <a href="https://github.com/serverdeer32/russian-travel" target="_blank" rel="noreferrer" className="portfolio__nav-link">
            <span className="portfolio__nav-link-name">Адаптивный сайт</span>
            <span className="portfolio__nav-link-name">↗</span>
          </a>
          <a href="https://github.com/serverdeer32/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="portfolio__nav-link">
            <span className="portfolio__nav-link-name">
              Одностраничное приложение
            </span>
            <span className="portfolio__nav-link-name">↗</span>
          </a>
        </nav>
      </section>
   );
}

export default Portfolio;
