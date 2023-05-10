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
import axios from 'axios';


function Youfinished(props) {
  const [name, setname] = useState("Neues Spiel");
  const [time, settime] = useState(0);
  

    function handleplaynew(props){

        props.setplayover(false);
        props.setplaynew(true);
        postDataToGame(formData);      

    }

    const postDataToGame = async (data) => {
      try {
        const response = await axios.post('http://localhost:3001/api/gamepost', data);
        console.log('Data posted successfully:', response.data);
       
      } catch (error) {
        console.error('Error posting data:', error);
        
      }
    };

    const formData = {
      name: name,
      time: time
    };


    useEffect(() =>{
      settime(props.endtime);


    }, [props.playover]);
    
    return (
        <div className='popper'>
          <div className='overlay'>
            <div className='popperstuff'>
              <h1>Score: {props.score}</h1>
              <h1>Time: {time}</h1>
              <button onClick={() => handleplaynew()}>Schliessen</button>
              <h1>Geben Sie einen Namen ein</h1>
              <input type='text' placeholder='Name eingeben' onChange={(e) => setname(e.target.value)}></input>              
            </div>
          </div>
        </div>
      );
} export default Youfinished;