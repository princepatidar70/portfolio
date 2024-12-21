import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Pages = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Pages;
