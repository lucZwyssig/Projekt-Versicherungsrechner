import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from '../Comps/Popuper.js';
import Footer from '../Comps/Footer.js'
import Stopwatch from '../Comps/Stopwatch.js';

function Youlost(props) {

    function handleplaynew(){
        props.setplayover(false);
        props.setplaynew(true);
    }
    
    return (
        <div className='popper'>
          <div className='overlay'>
            <div className='popperstuff'>
              <h1>Score: {props.score}</h1>
              <button onClick={() => handleplaynew()}>Schliessen</button>
              
            </div>
          </div>
        </div>
      );
} export default Youlost;