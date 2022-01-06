import React from "react";
import Navigation from "./components/Nav/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
