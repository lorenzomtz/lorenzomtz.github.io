import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar id="nav" variant="dark" expand="lg">
          <Navbar.Brand className="nav-text"><button onClick={refreshPage}>Lorenzo Martinez</button></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const refreshPage = () => {
  window.location.reload(false);
};

export default Navigation;
