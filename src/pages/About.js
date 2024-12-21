import React, { useState } from "react";
import p1 from "../assets/p1.jpg";
const About = () => {
  return (
    <>
      <div id="about" className="about">
      <h1   className="about-head">About</h1>
      <div className="about-main">
        <div className="a-leftbox">
          <img className="myphoto" src={p1} alt="myphoto" />
        </div>
        <div className="a-rightbox">
          <h2>Hello! I'm Prince Patidar</h2>
          <p>
            I have completed my graduation in Bsc (computer science), And
            currently pursuing MCA (2025).
          </p>
          <p>
            "I' m Front-End Developer with over 1 years of experience in
            creating dynamic, responsive, and visually appealing websites. I
            specialize in JavaScript frameworks like React.js and have hands-on
            experience in backend development using Node.js and MongoDB. I
            thrive on turning ideas into intuitive and functional web
            applications. Whether it's designing clean user interfaces or
            tackling challenging backend logic, I love to solve problems with
            code. When I'm not coding, you can find me exploring tech trends,
            learning new frameworks, or brainstorming ideas for exciting new
            projects."
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
