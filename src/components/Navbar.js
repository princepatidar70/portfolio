import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <h2 className="logo m-0">Prince's Portfolio</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ filter: "invert(1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="skill"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
