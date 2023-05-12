import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css";
import Popuper from '../Comps/Popuper.js';
import Footer from '../Comps/Footer.js';
import Enter from '../Comps/Enter.js';

function Calculator() {
  const [damage, setDamage] = useState(0);
  const [versumme, setVersumme] = useState("");
  const [schaden, setSchaden] = useState("");
  const [hauswert, setHauswert] = useState("");
  const [überunter, setÜberUnter] = useState("");
  const [userdata, setUserData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const versummeNumber = Math.min(parseInt(versumme), parseInt(hauswert));
    const hauswertNumber = parseFloat(hauswert);
    const schadenNumber = parseFloat(schaden); //nimmt die Strings und konvertiert sie zu integers

    if (hauswertNumber === 0) {
      alert("Hauswert kann nicht 0 sein");
    } else {
      setDamage(Math.floor(versummeNumber / hauswertNumber * schadenNumber));
    }

    if (parseFloat(versumme) === hauswertNumber) {
      setÜberUnter("Sie sind optimal versichert");
    } else if (parseFloat(versumme) < hauswertNumber) {
      setÜberUnter("Sie sind unterversichert. Vergrößern Sie die Versicherungssumme, um optimal versichert zu sein.");
    } else {
      setÜberUnter("Sie sind überversichert. Verkleinern Sie die Versicherungssumme, um optimal versichert zu sein.");
    }
  } //gibt einen Return basierend auf das Resultat der eingebenenen Werte

  const handleInputChange = (event, setValue) => {
    const value = event.target.value;
    const isValidInput = /^\d*$/.test(value); // Regex for numbers 0-9
    if (isValidInput) {
      setValue(value);
    }
  } //schaut ob der eingebene Wert eine Nummer ist, false ja setzt er den Wert zu diesen Wert

  useEffect(() => {
    setHauswert(userdata.hausw);
    setSchaden(userdata.damage);
    setVersumme(userdata.versum);
  }, [userdata]); //Falls mit dem Enter Prop Werte eingebeben wurden, setzt es sie

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
              <Col className='col col-12 col-md-6 colform'>
                <div className='form'>
                  <form onSubmit={handleSubmit}>
                    <br/>
                      <input type="text" placeholder="Versicherungssumme" value={versumme} onChange={(event) => handleInputChange(event, setVersumme)}/>
                    <br/>
                      <input  type="text" placeholder="Schaden" value={schaden} onChange={(event) => handleInputChange(event, setSchaden)}/>
                    <br/>
                      <input type="text" placeholder="Hauswert" value={hauswert} onChange={(event) => handleInputChange(event, setHauswert)}/>
                    <br/>
                      <input id='submitbutton' type="submit" value="berechnen" />
                  </form> 
                </div>
              </Col>
              <Col className='col col-12 col-md-6' id='damageresult'>
                <p><b>Die Versicherung wird {damage} Franken bezahlen. </b> <br/> {überunter}  </p>
                <Enter hausw={hauswert} versum={versumme} damage={schaden} premium={0}  text="Speichern"/> 
                <Popuper setuserdata={setUserData} text="gespeicherte Werte"/>
              </Col>
            </Row>
          <Footer/>
         
        </Container>
      </div>
      );
}
export default Calculator;
