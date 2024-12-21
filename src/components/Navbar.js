import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {

  return (
    <nav className="navbar">
      <h2 className="logo">Prince's Portfolio</h2>
      <ul>
        <li>
        <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={300}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={300}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={300}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
