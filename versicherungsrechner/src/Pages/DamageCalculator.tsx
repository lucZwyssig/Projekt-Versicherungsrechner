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
 // change variable names to english
 //do the screen size thing for bootstrap

function Calculator () {
    const [Versumme, setVersumme] = useState(0);
    const [Schaden, setSchaden] = useState(0);
    const [Hauswert, setHausw] = useState(0);
    const [damage, setdamage] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       setdamage(Versumme/Hauswert*Schaden);
      };
      
      
    
    
      return (
        <Container fluid className='bootstrap_container'>
            <Row className='row'>
            
            <Header />
            
                     
           </Row>
           
          <Row className='row'>
            <Col className='col'>
          <Instruction shorttext='Lorem ips. Nuvida nisl elit, eget consequat' 
          longtext='sed ante pretium consequat eu eget odio. Nullam pulvinar, felis vitae consequat tincidunt, augue libero blandit lorem, a auctor felis turpis eget ipsum. Nulla ultricies sapien felis, vel accumsan arcu volutpat nec. Phasellus sit amet mollis nibh. Fusce porttitor condimentum libero, at efficitur eros luctus id. Nullam mi lacus, fringilla in aliquam nec, imperdiet non magna. Morbi egestas risus in metus commodo suscipit. Curabitur ipsum sem, commodo quis sem nec, vulputate lacinia sem. Ut consequat lectus quis laoreet bibendum. Mauris maximus bibendum faucibus. Nam finibus mi vitae lorem dapibus, sit amet porttitor tortor tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' />
          </Col>
          </Row>
          
          <Row className='row'>
            
            
          <Col className='col'>
          <form onSubmit={handleSubmit}>
          
            <input type="number" placeholder="Versicherungssumme eingeben" onChange={event => setVersumme(event.target.valueAsNumber)}/>
            <br/>
            
            
            <input type="number" placeholder="Schaden eingeben" onChange={event => setSchaden(event.target.valueAsNumber)}/>
            <br/>
            
            <input type="number" placeholder="Hauswert eingeben" onChange={event => setHausw(event.target.valueAsNumber)}/>
            <br/>
            
            <input type="submit" value="submit" />
         </form>
         </Col>
         <Col className='col' id='result'>
         {damage}
         </Col>
         </Row>
         
        
         </Container>
      );
}
export default Calculator;

