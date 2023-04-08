import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from '../Comps/Header';
import Instruction from '../Comps/Instructions';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from '../Comps/Popuper';
import Input from '../Comps/Input';

 // change variable names to english
 //do the screen size thing for bootstrap

function Calculator () {
    
    const [damage, setdamage] = useState(0);
    
    const calculator = (prop: number) =>{
      setdamage (prop);

    }
      return (
      <div>
        <Header/>
        <Container fluid className='bootstrap_container'>             
          <Row className='row'>
            <Col className='col'>
              <Instruction shorttext='Lorem ips. Nuvida nisl elit, eget consequat' 
                longtext='sed ante pretium consequat eu eget odio. Nullam pulvinar, felis vitae consequat tincidunt, augue libero blandit lorem, a auctor felis turpis eget ipsum. Nulla ultricies sapien felis, vel accumsan arcu volutpat nec. Phasellus sit amet mollis nibh. Fusce porttitor condimentum libero, at efficitur eros luctus id. Nullam mi lacus, fringilla in aliquam nec, imperdiet non magna. Morbi egestas risus in metus commodo suscipit. Curabitur ipsum sem, commodo quis sem nec, vulputate lacinia sem. Ut consequat lectus quis laoreet bibendum. Mauris maximus bibendum faucibus. Nam finibus mi vitae lorem dapibus, sit amet porttitor tortor tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' />
            </Col>
          </Row>
          <Row className='row'>
            <Col className='col'id='colform'>
              <Input Calc={calculator}/>
              <Popuper/>
            </Col>
            <Col className='col' id='result'>
              {damage}
            </Col>
         </Row>
        </Container>
      </div>
      );
}
export default Calculator;

