import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Instruction from './Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from './Popuper.js';
import Footer from './Footer.js'
import Stopwatch from './Stopwatch.js';

function Youfinished(props) {

    function handleplaynew(){
        props.setplayover(false);
        props.setplaynew(true);
    }

    useEffect(() =>{
      
    });
    
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
} export default Youfinished;