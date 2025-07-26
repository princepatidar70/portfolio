import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/p2-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <h2 className="logo m-0">Prince's Portfolio</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={300} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={300} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={300} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skill" smooth={true} duration={300} onClick={() => setIsOpen(false)}>
                Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
