import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar id="nav" variant="dark" expand="lg">
        <Navbar.Brand className="nav-text">
          <button onClick={refreshPage}>
            <Image fluid id="name-icon" src="L.png" />
          </button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact" id="penultimate-icon">Contact</Nav.Link>
            <Nav.Link
              href="https://github.com/lorenzomtz"
              target="_blank"
              rel="noreferrer"
              // id="penultimate-icon"
            >
              <Image fluid className="icon" src="github.png" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/lorenzo-mtzz/"
              target="_blank"
              rel="noreferrer"
              id="last-icon"
            >
              <Image fluid className="icon" src="linkedin.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const refreshPage = () => {
  window.location.reload(false);
};

export default Navigation;
