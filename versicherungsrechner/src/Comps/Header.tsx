import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import "../CSS.css"
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

function Header () {
    return(
        <Container fluid>
            <ul>
                <Col>
                <li>
                    <Link to="/">Home</Link>
                </li>
                </Col>
                <Col>
                <li>
                    <Link to="/memory">Memory</Link>
                </li>
                </Col>
                <Col>
                <li>
                    <Link to="/calculator">Rechner</Link>
                </li>
                </Col>
                <Col>
                <li>
                    <Link to="/comparer">Rechner</Link>
                </li>   
                </Col>             
            </ul>
        </Container>
    );
    

    


}

export default Header;
