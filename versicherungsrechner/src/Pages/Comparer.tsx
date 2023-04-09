import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Comps/Header';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions';
import {Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import Input from '../Comps/Input';
import Popuper from '../Comps/Popuper';

function Comparer () {
    const [damage, setdamage] = useState(0);
    const [prämie, setprämie] = useState(0);
    const calculator = (prop: number) =>{
      setdamage (prop);

    }
    const premcalc = (prop: number) =>{
      setprämie(prop);
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
              <Input Calc={calculator} Premium={premcalc}/>
              <Popuper/>

            </Col>
            <Col className='result'>

            </Col>
            <Col className='colform'>
            <Input Calc={calculator} Premium={premcalc}/>
            <Popuper/>  
            </Col>
          </Row>

        </Container>

        </div>
    )
}
export default Comparer;
