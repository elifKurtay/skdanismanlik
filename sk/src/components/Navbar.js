import React, {useState} from 'react';
import {Link} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          SK Danışmanlık
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars}/>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="hero" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="cards" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              Hizmetlerimiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              Hakkımda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="footer" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;