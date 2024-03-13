import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">© 2023</span>
        <nav className="footer__links">
          <a href="https://prakticum.yandex.ru" target='_blank' className="footer__links-item">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/serverdeer32" target='_blank' className="footer__links-item">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
