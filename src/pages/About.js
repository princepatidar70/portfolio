
import React from "react";
import p1 from "../assets/p1.jpg";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <h1 className="text-center about-head mb-4 fw-bold">About Me</h1>
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={p1}
            alt="Prince Patidar"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Hello! I'm Prince Patidar</h2>
          <p className="text-light">
            I have completed my graduation in BSc (Computer Science) and am currently pursuing MCA (2025).
          </p>
          <p className="text-light">
            I'm a Front-End Developer with over 1.5 years of experience in
            creating dynamic, responsive, and visually appealing websites. I
            specialize in JavaScript frameworks like React.js and have
            hands-on experience in backend development using Node.js and
            MongoDB.
          </p>
          <p className="text-light">
            I thrive on turning ideas into intuitive and functional web
            applications. Whether it's designing clean user interfaces or
            tackling challenging backend logic, I love solving problems with
            code. When I'm not coding, you can find me exploring tech trends,
            learning new frameworks, or brainstorming ideas for exciting new
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
