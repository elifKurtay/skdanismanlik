import React, {useState} from 'react';
import {Link} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import {NAVBAR} from "../constants";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {NAVBAR.company}
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars}/>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="hero" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              {NAVBAR.anasayfa}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="cards" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-80} duration={500}>
              {NAVBAR.hizmetler}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-80} duration={500}>
              {NAVBAR.hakkimda}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="footer" className="nav-links" onClick={closeMobileMenu}
                  smooth={true} spy={true} offset={-100} duration={500}>
              {NAVBAR.iletisim}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;