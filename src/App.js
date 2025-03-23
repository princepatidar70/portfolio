import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./Pages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>

      <Navbar />
      <Pages />
      <Footer />
    </>
  );
};

export default App;
