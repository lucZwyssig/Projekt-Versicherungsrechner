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

function Stopwatch() {
    const [isrunning, setisrunning] = useState(false);
    
    const [time, settime] = useState(0);



    return(
        <Col>
        {time}
        </Col>
    )
}


