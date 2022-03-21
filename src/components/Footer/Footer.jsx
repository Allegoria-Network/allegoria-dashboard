import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="description">
        <div className="copyright">
          <span class="text">Copyright &copy; 2022 - Allegoria Network, a service provided by </span>
          <a href="https://green-bot.app" class="green-bot-invite" target="_blank" rel="noopener noreferrer">Green-bot Developement</a>
        </div>
        <div className="useful-links">
          <p className="title">Useful links</p>
          <div className="links">
            <Link to="/terms" className="link">Terms of service</Link>
            <span className="separator">|</span>
            <Link to="/discord" className="link">Support server</Link>
            <span className="separator">|</span>
            <Link to="/appeals" className="link">Ban appeals</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
