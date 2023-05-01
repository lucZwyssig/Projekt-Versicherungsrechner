import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from '../Comps/Popuper.js';
import Footer from '../Comps/Footer.js'


function Memory(){
    const terms =["Versicherungssumme", "Hauswert", "Hausrat", "Prämie", "Überversicherung", "Unterversicherung"];
    const definitions = ["1", "2", "3", "4", "5", "6"];
    const shuffledarray = terms.concat(definitions).sort(function () {
        return Math.random() -0.3;
    });
    function check(){
        const first = null;

    }
    
    
    return(
        <div>
            <Row>
                <Col>{shuffledarray[0]}</Col>
                <Col>{shuffledarray[1]}</Col>
                <Col>{shuffledarray[2]}</Col>
                <Col>{shuffledarray[3]}</Col>
            </Row>
            <Row>
                <Col>{shuffledarray[4]}</Col>
                <Col>{shuffledarray[5]}</Col>
                <Col>{shuffledarray[6]}</Col>
                <Col>{shuffledarray[7]}</Col>
            </Row>
            <Row>
                <Col>{shuffledarray[8]}</Col>
                <Col>{shuffledarray[9]}</Col>
                <Col>{shuffledarray[10]}</Col>
                <Col>{shuffledarray[11]}</Col>
            </Row>

        </div>
    )
}
export default Memory;