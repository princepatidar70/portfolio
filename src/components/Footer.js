import React from "react";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/social.png";
import twitter from "../assets/logos.png";
import git from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div>
            {" "}
            <h2 className="logo">Prince's Portfolio</h2>
          </div>
          <div>
            <h2>Get In touch</h2>

            <pre style={{ fontSize: "15px" }}>
              {`43, Devendra nagar Chankyapuri,
  Indore 452001`}
            </pre>
            <p style={{ color: "whitesmoke" }}>
              {" "}
              I agree to all your terns and policies
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>princeptdr12@gmail.com</p>
            <p>7722885734</p>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/prince-patidar-a9b13023a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" width="30px" />
              </a>
              <a
                href="https://github.com/princepatidar70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="git" width="30px" />
              </a>
              <a
                href="https://gitlab.com/prince_2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitlab} alt="gitlab" width="30px" />
              </a>
              <a
                href="https://facebook.com/prince.patidar.1884787"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="fb" width="30px" />
              </a>
              <a
                href="https://x.com/princepati67081?t=6OaLjw4D5g1XWWJ_u8cw0g&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="insta" width="30px" />
              </a>
              <a
                href="https://www.instagram.com/prince_patidar70/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="insta" width="30px" />
              </a>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <p className="copy">
          Copyright ©2024 <span className="name"> Princepatidar</span>. All
          Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
