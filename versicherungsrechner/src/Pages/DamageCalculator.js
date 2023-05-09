import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from '../Comps/Popuper.js';
import Footer from '../Comps/Footer.js'
import Enter from '../Comps/Enter.js';


 // change variable names to english
 //do the screen size thing for bootstrap

function Calculator () {
    
    const [damage, setdamage] = useState(0);
    const [Versumme, setVersumme] = useState("");
    const [Schaden, setSchaden] = useState("");
    const [Hauswert, setHausw] = useState("");
    const [überunter, setüberunter] = useState("");
    const [userdata, setuserdata] = useState({});
    
    
    
    const handleSubmit = (event) => {
      event.preventDefault();

      const versummeNumber = Math.min(parseInt(Versumme), parseInt(Hauswert));
      const hauswertNumber = parseFloat(Hauswert);
      const schadenNumber = parseFloat(Schaden);
      
      if (hauswertNumber === 0) {
          alert("Hauswert kann nicht 0 sein");
      } else {
          setdamage(Math.floor( versummeNumber/hauswertNumber*schadenNumber));
          
      }
      if (parseFloat(Versumme) === hauswertNumber) {
        setüberunter("Sie sind optimal versichert");
      } else if (parseFloat(Versumme) < hauswertNumber) {
        setüberunter("Sie sind unterversichert. Vergrössern Sie die Versicherungssumme um optimal versichert zu sein.");
      } else {
        setüberunter("Sie sind überversichert. Verkleinern Sie die Versicherungssumme um optimal versichert zu sein.");
      }
      
  }
  function handleInputChange(event, setValue) {
    const value = event.target.value;
    const isValidInput = /^\d*$/.test(value); //regex für Zahlen 0-9
    if (isValidInput) {
        setValue(value);
    }
}
useEffect(() => {
  setHausw(userdata.hausw);
  setSchaden(userdata.damage);
  setVersumme(userdata.versum);

}, [userdata])
      return (
      <div>
        <Header/>
        <Container fluid className='bootstrap_container'> 
        <Row className='row'>
            <Col className='col instruction'>        
          
              <Instruction shorttext='Mit diesem Tool können Sie den bezahlter Schaden eines Hausrats berechnen.' 
                longtext='Als Eingaben mössen sie 4 nötige Werte eingeben. Als erstes die Versicherungssumme. Die Versicherungssumme ist die mit dem Versicherungsunternehmen vereinbarten Betrag, den die Versicherung maximal bezahlen wird. Als nächstes den Betrag des Schadens der entstanden ist. Zuletzt muss auch der Hauswert noch eingegeben werden. Dieser ist der Wert des Hauses und seine Gegenstände.  ' />
            </Col>
        </Row>
            
            <Row className='row'>
              <Col className='col col-12 col-md-4 'id='colform'>
                <form onSubmit={handleSubmit}>
                    <br/>
                      <input className='inputbutton wideinput' type="text" placeholder="Versicherungssumme eingeben" value={Versumme} onChange={(event) => handleInputChange(event, setVersumme)}/>
                    <br/>
                      <input className='inputbutton wideinput' type="text" placeholder="Schaden eingeben" value={Schaden} onChange={(event) => handleInputChange(event, setSchaden)}/>
                    <br/>
                      <input className='inputbutton wideinput' type="text" placeholder="Hauswert eingeben" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)}/>
                    <br/>
                  <div>
                    <input className='inputbutton wideinput' type="submit" value="submit" />
                  </div>      
                </form> 
            </Col>
            <Col className='col col-12 col-md-2'>
                <Popuper setuserdata={setuserdata} />
                <Enter hausw="99"/> 
            </Col>
            <Col className='col col-6' id='damageresult'>
              <p><b>Die Versicherung wird {damage} Franken bezahlen. </b> <br/> {überunter}  </p>
              
            </Col>
         </Row>
         
        </Container>
      </div>
      );
}
export default Calculator;
//where it should be
