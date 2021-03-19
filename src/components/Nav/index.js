import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import logo from '../Assets/Images/logo.jpg'
import Pdf from '../Assets/PDF/EngineerResume.pdf';
import "./styles.css"

class BootstrapNavbar extends React.Component{
  render(){
    
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/" img={logo}></Navbar.Brand>
        <Nav activeKey="/home">
          <Nav.Item>
            <Link to="/reactportfolio.io" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link">About</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/projects" className="nav-link">Projects</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/contact" className="nav-link">Contact</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to={Pdf} target="_blank" className="nav-link">Resume</Link>
          </Nav.Item>
          <Nav.Item >
          <Link to="/contact" className="nav-link">Email: Andymunro87@gmail.com</Link>
          </Nav.Item>
      </Nav>
    </Navbar>

    );
  }
}
export default BootstrapNavbar;