import React from "react";

const Home = () => {
  return (
    <div  id="home" className="home-main">
      <div className="h-leftbox">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hey, I'm Prince Patidar </h2>
        <p>
          A Passionate <span className="title"> Front-End Developer.</span>
        </p>
        <p>
          Building engaging, user-friendly web experiences with modern
          JavaScript frameworks and a touch of creativity.
        </p>
        <p>Explore my projects and sign up to get updates.</p>
        <div className="btns">
          <a
            href="/Prince patidar resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">View Resume</button>
          </a>
        </div>
      </div>
      <div className="h-rightbox">
        <img
          src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp"
          width="90%"
        />
      </div>
    </div>
  );
};

export default Home;
