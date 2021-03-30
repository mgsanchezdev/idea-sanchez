import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="conatainerNavBar">
      <Navbar bg="light" expand="lg">
        <Link className="link" to="/">
          {' '}
          Tienda MGS
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="link" to="/category/ropa_invierno">
                  Ropa Invierno
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/category/ropa_verano">
                  Ropa Verano
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/category/indumentaria">
                  Indumentaria
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/category/zapatillas">
                  Zapatillas
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CartWidget />
    </div>
  );
};

export default NavBar;
