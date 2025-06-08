import React, {useEffect, useState} from 'react';
import {Link} from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import '../visuals/Navbar.css';
import {NAVBAR} from "../constants";

function Navbar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navLinks = [
    { to: "hero", label: NAVBAR.anasayfa, offset: -100 },
    { to: "cards", label: NAVBAR.hizmetler, offset: -80 },
    { to: "about", label: NAVBAR.hakkimda, offset: -80 },
    { to: "footer", label: NAVBAR.iletisim, offset: -100 },
  ];

  const handleNavClick = (to) => {
    if (location.pathname !== "/") {
      setScrollTarget(to); // Save the target section
      navigate("/", { replace: true });
      scrollToSection(to);
    } else {
      scrollToSection(to);
    }
  };
  const scrollToSection = (to) => {
    const scroll = document.getElementById(to);
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (scrollTarget && location.pathname === "/") {
      scrollToSection(scrollTarget);
      setScrollTarget(null); // Reset the target after scrolling
    }
  }, [scrollTarget]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
              src={"./images/consulting-icon.ico"}
              alt="Consulting Icon"
              style={{ height: "1em", width: "1em", marginRight: "0.5em"}}
          />
          {NAVBAR.company}
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars}/>
        </div>
        <ul className={click ? "nav-menu.active" : "nav-menu"}>
          {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                    to={link.to}
                    className="nav-links"
                    onClick={() => {
                      closeMobileMenu();
                      handleNavClick(link.to);
                    }}
                    smooth={true}
                    spy={true}
                    offset={link.offset}
                    duration={500}
                >
                  {link.label}
                </Link>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;