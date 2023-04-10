import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Comps/Header.js';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions.js';
import {Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import Popuper from '../Comps/Popuper.js';
import Chart from 'react-google-charts';

function Comparer () {
  const [Versumme1, setVersumme1] = useState("");
  const [Hauswert1, setHausw1] = useState("");
  const [Prämie1, setPrämie1] = useState("");
  const [Versumme2, setVersumme2] = useState("");
  const [Hauswert2, setHausw2] = useState("");
  const [Prämie2, setPrämie2] = useState("");
    function handleSubmit(){


    }
    function handleInputChange(event, setValue){
      const value = event.target.value;
    const isValidInput = /^\d*$/.test(value);
    if (isValidInput) {
        setValue(value);
    }
    }
    
    
        
    return(
        <div>
            <Header/>
            <Container fluid>
            <Row className='row'>
            <Col className='col'>
          <Instruction shorttext='Lorem ips. Nuvida nisl elit, eget consequat' 
          longtext='sed ante pretium consequat eu eget odio. Nullam pulvinar, felis vitae consequat tincidunt, augue libero blandit lorem, a auctor felis turpis eget ipsum. Nulla ultricies sapien felis, vel accumsan arcu volutpat nec. Phasellus sit amet mollis nibh. Fusce porttitor condimentum libero, at efficitur eros luctus id. Nullam mi lacus, fringilla in aliquam nec, imperdiet non magna. Morbi egestas risus in metus commodo suscipit. Curabitur ipsum sem, commodo quis sem nec, vulputate lacinia sem. Ut consequat lectus quis laoreet bibendum. Mauris maximus bibendum faucibus. Nam finibus mi vitae lorem dapibus, sit amet porttitor tortor tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' />
          </Col>
          </Row>
          <Row className='row'>
            <Col className='colform'>
            <form onSubmit={handleSubmit}>
                    <Col className='mor'>
                        <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme1} onChange={(event) => handleInputChange(event, setVersumme1)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Prämie eingeben" value={Prämie1} onChange={(event) => handleInputChange(event, setPrämie1)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Hauswert eingeben" value={Hauswert1} onChange={(event) => handleInputChange(event, setHausw1)}/>
                    </Col>
                    
                    <input type="submit" value="submit" />
                </form>
              
              <Popuper/>
            </Col>
            <Col className='result'>
                

            </Col>
            <Col className='colform'>
            <form onSubmit={handleSubmit}>
                    <Col className='mor'>
                        <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme2} onChange={(event) => handleInputChange(event, setVersumme2)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Prämie eingeben" value={Prämie2} onChange={(event) => handleInputChange(event, setPrämie2)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Hauswert eingeben" value={Hauswert2} onChange={(event) => handleInputChange(event, setHausw2)}/>
                    </Col>
                    
                    <input type="submit" value="submit" />
                </form>
            
            <Popuper/>  
            </Col>
          </Row>

        </Container>

        </div>
    )
}
export default Comparer;
