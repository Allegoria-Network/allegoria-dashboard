import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo.png" alt="Allegoria Logo" className="image"></img>
        <Link to="/" className="link">Allegoria</Link>
      </div>
      <div className="links">
        <Link to="/commands" className="link">Commands</Link>
        <Link to="/clans" className="link">Clans</Link>
        <Link to="/discord" className="link">Support Server</Link>
        <a href="https://top.gg" target="_blank" rel="noopener noreferrer" className="link">Commands</a>
        <Link to="/auth/login" className="login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
