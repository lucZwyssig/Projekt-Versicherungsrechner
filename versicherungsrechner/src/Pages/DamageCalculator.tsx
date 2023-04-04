import React, { FormEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Comps/Header';
import Instruction from '../Comps/Instructions';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popup from '../Comps/Popup';
 // change variable names to english
 //do the screen size thing for bootstrap

function Calculator () {
    const [Versumme, setVersumme] = useState("");
    const [Schaden, setSchaden] = useState("");
    const [Hauswert, setHausw] = useState("");
    const [damage, setdamage] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const versummeNumber = parseFloat(Versumme);
      const hauswertNumber = parseFloat(Hauswert);
      const schadenNumber = parseFloat(Schaden);
    
      if (isNaN(versummeNumber) || isNaN(hauswertNumber) || isNaN(schadenNumber)) {
        
        return;
      }
      else setdamage(versummeNumber/hauswertNumber*schadenNumber);
    
      
    }
      function handleInputChange(event: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) {
        const value = event.target.value;
        const isValidInput = /^\d*$/.test(value);
        if (isValidInput) {
          setValue(value);
        }
      }
      
      
    
    
      return (
        
        <Container fluid className='bootstrap_container'>
            <Row className='row'>
            
            <Header/>
            
                     
           </Row>
           
          <Row className='row'>
            <Col className='col'>
          <Instruction shorttext='Lorem ips. Nuvida nisl elit, eget consequat' 
          longtext='sed ante pretium consequat eu eget odio. Nullam pulvinar, felis vitae consequat tincidunt, augue libero blandit lorem, a auctor felis turpis eget ipsum. Nulla ultricies sapien felis, vel accumsan arcu volutpat nec. Phasellus sit amet mollis nibh. Fusce porttitor condimentum libero, at efficitur eros luctus id. Nullam mi lacus, fringilla in aliquam nec, imperdiet non magna. Morbi egestas risus in metus commodo suscipit. Curabitur ipsum sem, commodo quis sem nec, vulputate lacinia sem. Ut consequat lectus quis laoreet bibendum. Mauris maximus bibendum faucibus. Nam finibus mi vitae lorem dapibus, sit amet porttitor tortor tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' />
          </Col>
          </Row>
          
          <Row className='row'>
            
            
          <Col className='col' id='colform'>
          <form onSubmit={handleSubmit}>
          
            <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme} onChange={(event) => handleInputChange(event, setVersumme)}/>
            <br/>
            
            
            <input type="text" placeholder="Schaden eingeben" value={Schaden} onChange={(event) => handleInputChange(event, setSchaden)}/>
            <br/>
            
            <input type="text" placeholder="Hauswert eingeben" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)}/>
            <br/>
            
            <input type="submit" value="submit" />
         </form>
         </Col>
         <Col className='col' id='result'>
         {damage}
         </Col>
         </Row>
         <Popup/>
         
        
         </Container>
      );
}
export default Calculator;

