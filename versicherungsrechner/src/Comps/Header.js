import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import "../CSS.css"
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  

function Header () {
    return (
        <div>
          <Navbar className='navbar' collapseOnSelect expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">Luc Zwyssig Versicherung</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/calculator">Rechner</Nav.Link>
                  <Nav.Link href="/memory">Memory</Nav.Link>
                  <Nav.Link href="/comparer">Vergleicher</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
        

    


}

export default Header;
