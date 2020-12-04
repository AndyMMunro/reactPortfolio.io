import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {

  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
  );
}
export default Nav;