import React from "react";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-uppercase fw-bold mb-2" style={{ color: "var(--primary)", letterSpacing: "1px", fontSize: "0.85rem" }}>
          GET TO KNOW ME
        </h5>
        <h1 className="fw-bold display-5">About Me</h1>
      </div>
      
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-7 mb-5 mb-md-0">
          <h3 className="fw-bold mb-3" style={{ color: "var(--secondary)" }}>
            Hello! I'm Prince Patidar
          </h3>
          <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: "1.8" }}>
            I have completed my graduation in BSc (Computer Science) and am currently pursuing MCA (2025). I specialize in designing and building modern web environments.
          </p>
          <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: "1.8" }}>
            I'm a Front-End Developer with over 2.5 years of experience in creating dynamic, responsive, and visually appealing websites. I specialize in JavaScript frameworks like React.js and have hands-on experience in backend development using Node.js and MongoDB.
          </p>
          <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: "1.8" }}>
            I thrive on turning ideas into intuitive and functional web applications. Whether it's designing clean user interfaces or tackling challenging backend logic, I love solving problems with code.
          </p>
        </div>

        <div className="col-md-5 ps-md-5">
          <div className="d-flex flex-column gap-3">
            <div className="stat-card glass-card d-flex align-items-center gap-3 p-3" style={{ borderLeft: "4px solid var(--primary)", cursor: "default" }}>
              <div className="stat-icon-wrapper" style={{ color: "var(--primary)", background: "rgba(114,138,244,0.08)", padding: "12px", borderRadius: "12px", display: "flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="text-start">
                <h4 className="stat-number m-0" style={{ fontSize: "1.5rem", fontWeight: "800" }}>2.5+ Years</h4>
                <p className="stat-label m-0" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "none", letterSpacing: "normal" }}>Development Experience</p>
              </div>
            </div>

            <div className="stat-card glass-card d-flex align-items-center gap-3 p-3" style={{ borderLeft: "4px solid var(--secondary)", cursor: "default" }}>
              <div className="stat-icon-wrapper" style={{ color: "var(--secondary)", background: "rgba(0,242,254,0.08)", padding: "12px", borderRadius: "12px", display: "flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="text-start">
                <h4 className="stat-number m-0" style={{ fontSize: "1.5rem", fontWeight: "800" }}>12+ Projects</h4>
                <p className="stat-label m-0" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "none", letterSpacing: "normal" }}>Completed & Live Works</p>
              </div>
            </div>

            <div className="stat-card glass-card d-flex align-items-center gap-3 p-3" style={{ borderLeft: "4px solid var(--accent-pink)", cursor: "default" }}>
              <div className="stat-icon-wrapper" style={{ color: "var(--accent-pink)", background: "rgba(244,63,94,0.08)", padding: "12px", borderRadius: "12px", display: "flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div className="text-start">
                <h4 className="stat-number m-0" style={{ fontSize: "1.5rem", fontWeight: "800" }}>MCA Scholar</h4>
                <p className="stat-label m-0" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "none", letterSpacing: "normal" }}>Post-Graduation (2025)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
