import React from "react";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/social.png";
import twitter from "../assets/logos.png";
import git from "../assets/github.png";
import gitlab from "../assets/gitlab.png";

const Footer = () => {
  return (
    <footer className="footer text-white py-5 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-between text-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="footer-logo">Prince's Portfolio</h2>
            <p className="text-muted small" style={{ maxWidth: "300px" }}>
              Creating elegant, user-centric web applications using modern full-stack development tools.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>Get In Touch</h5>
            <p className="mb-1 text-muted small">45, Vijay Nagar, Indore 452001</p>
            <p className="text-muted small">ppatidar9670@gmail.com | 7722885734</p>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>Connect Socially</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://linkedin.com/in/prince-patidar-a9b13023a" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" width="30px" />
              </a>
              <a href="https://github.com/princepatidar70" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="git" width="30px" />
              </a>
              <a href="https://gitlab.com/prince_2002" target="_blank" rel="noopener noreferrer">
                <img src={gitlab} alt="gitlab" width="30px" />
              </a>
              <a href="https://facebook.com/prince.patidar.1884787" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="fb" width="30px" />
              </a>
              <a href="https://x.com/princepati67081?t=6OaLjw4D5g1XWWJ_u8cw0g&s=09" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" width="30px" />
              </a>
              <a href="https://www.instagram.com/prince_patidar70/" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="insta" width="30px" />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-5" style={{ borderColor: "var(--border-glass)" }} />

        <div className="row mt-4 align-items-center">
          <div className="col-12 text-center">
            <p className="small mb-0 text-muted">
              Copyright &copy; {new Date().getFullYear()} <span style={{ color: "var(--primary)", fontWeight: "600" }}>Prince Patidar</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
