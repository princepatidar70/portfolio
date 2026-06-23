import React from "react";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ScrollReveal from "./components/ScrollReveal";

const Pages = () => {
  return (
    <div className="container">
      <ScrollReveal>
        <Home />
      </ScrollReveal>
      <div className="section-separator"></div>
      
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>
      <div className="section-separator"></div>
      
      <Projects />
      <div className="section-separator"></div>
      
      <Skills />
      <div className="section-separator"></div>
      
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default Pages;


