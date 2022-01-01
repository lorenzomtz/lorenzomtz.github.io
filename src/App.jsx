import React from "react";
import Navigation from "./components/Nav/Navigation";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
