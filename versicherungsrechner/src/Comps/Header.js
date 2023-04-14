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
    return(
        <Navbar>
        <Container fluid>
            <Navbar.Brand href='/'>
            Sandsturm Enterprises Versicherung 
            </Navbar.Brand>
            <Nav className='navbar-nav d-flex align-items-center' >
                <Nav.Link href='/calculator'>Rechner</Nav.Link>
                <Nav.Link href='/memory'>Memory</Nav.Link>
                <Nav.Link href='/comparer'>Vergleicher</Nav.Link>
            </Nav>
            
            
            
        </Container>
        </Navbar>
    );
        

    


}

export default Header;
