
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function AppNavbar( props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Beautiful Blooms</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>{props.changeView("Home") }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{props.changeView("About us") }}>About Us</Nav.Link>
          <NavDropdown title="Occasions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/occasions">Occasions Link</NavDropdown.Item>
            {/* Add more NavDropdown.Items as needed */}
          </NavDropdown>
          <NavDropdown title="Plants" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/plants">Plants Link</NavDropdown.Item>
            {/* Add more NavDropdown.Items as needed */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
