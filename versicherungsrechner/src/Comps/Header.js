import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import "../CSS.css"
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  

function Header () { //das Header Component
    return (
        <div id='navbardiv'>
          <Navbar className='navbar' collapseOnSelect expand="lg">
            
              <Navbar.Brand href="/">Luc Zwyssig Versicherung</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/calculator">Rechner</Nav.Link>
                  <Nav.Link href="/memory">Versicherungsspiel</Nav.Link>
                  <Nav.Link href="/comparer">Vergleicher</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            
          </Navbar>
        </div>
      );
        

    


}

export default Header;
