import React from "react";
import me from '.././assets/me.png'
const Home = () => {
  return (
    <section id="home" className="container-fluid py-5 d-flex align-items-center min-vh-100 ">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
            <h2 className="h3 mb-3">Hey, I'm <span className="text-primary">Prince Patidar</span></h2>
            <p className="lead">
              A Passionate <span className="fw-bold text-primary">Full Stack Developer</span>.
            </p>
            <p className="text-light">
              Building engaging, user-friendly web experiences with modern
              JavaScript frameworks and a touch of creativity.
            </p>
            <p className="text-light ">Explore my projects and stay updated.</p>
            <div className="mt-3 d-flex justify-content-center">
              <a
                href={`${process.env.PUBLIC_URL}/princeResume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 shadow-sm"
              >
                View Resume
              </a>


            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp"
              alt="Portfolio"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
