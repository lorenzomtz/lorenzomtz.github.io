import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <Navbar id="nav" variant="dark" expand="lg">
          <Navbar.Brand className="nav-text" href="#home">Lorenzo Martinez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
