import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import me from '../assets/me.jpg';

const words = ["Full Stack Developer", "React Specialist", "Node Specialist", "MCA Scholar", "Problem Solver"];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200); // Wait before backspacing
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="home" className="container-fluid py-5 d-flex align-items-center min-vh-100" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-5 mb-md-0">
            <h5 className="text-uppercase fw-bold tracking-wider mb-3" style={{ color: "var(--primary)", fontSize: "0.9rem", letterSpacing: "2px" }}>
              WELCOME TO MY PORTFOLIO
            </h5>
            <h1 className="hero-gradient-text fw-bold mb-3">
              Hi, I'm Prince Patidar
            </h1>
            <h2 className="h3 mb-3 text-light">
              A Passionate <span className="highlight-text">{currentText}</span>
              <span className="typing-cursor"></span>
            </h2>
            <div
              className="mb-3 text-md-start text-center"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "700",
                background: "linear-gradient(90deg, #ffffff 20%, var(--secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                letterSpacing: "-0.01em"
              }}
            >
              Turning ideas into powerful digital experiences.
            </div>
            <p className="lead text-muted mb-4" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              I'm a Full Stack Developer passionate about building secure, scalable, and high-performance applications. From intuitive user interfaces to robust backend systems, I create solutions that help businesses grow and deliver exceptional user experiences.
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href={`${process.env.PUBLIC_URL}/Prince_patidar_resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow"
              >
                <span>View Resume</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-secondary-glow"
                style={{ cursor: "pointer" }}
              >
                <span>Let's Talk</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="col-md-6 text-center d-flex justify-content-center align-items-center mt-5 mt-md-0">
            <div className="floating-img-container">
              <img
                src={me}
                alt="Prince Patidar"
                className="floating-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
