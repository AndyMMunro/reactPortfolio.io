import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import "./styles.css"

class BootstrapNavbar extends React.Component{
  render(){
    
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Project</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" >Contact</Nav.Link>
          </Nav.Item>
      </Nav>
    </Navbar>

    );
  }
}
export default BootstrapNavbar;