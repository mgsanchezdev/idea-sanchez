import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Tienda MGS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Ropa</Nav.Link>
          <NavDropdown title="Tecnologia" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Computadoras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Celulares</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">TV</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Consolas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
