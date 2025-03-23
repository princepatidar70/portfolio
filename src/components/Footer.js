import React from "react";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/social.png";
import twitter from "../assets/logos.png";
import git from "../assets/github.png";
import gitlab from "../assets/gitlab.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer text-white py-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h2 className="fw-bold">Prince's Portfolio</h2>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h5 className="fw-bold">Get In Touch</h5>
            <p className="mb-1">43, Devendra Nagar, Chankyapuri, Indore 452001</p>
            <p className="small">I agree to all your terms and policies</p>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1">princeptdr12@gmail.com</p>
            <p className="mb-2">7722885734</p>

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
      </div>

      <hr className="mt-4 border-light" />
      <p className="text-center small mb-0">Copyright &copy; 2024 <span className="fw-bold">Prince Patidar</span>. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
