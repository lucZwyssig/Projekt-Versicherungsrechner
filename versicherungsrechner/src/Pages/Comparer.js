import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import Popuper from '../Comps/Popuper.js';
import Chart from 'react-google-charts';
import Footer from '../Comps/Footer.js';
import Enter from '../Comps/Enter.js';

function Comparer() {
  const [Versumme1, setVersumme1] = useState('');
  const [Hauswert, setHausw] = useState('');
  const [Prämie1, setPrämie1] = useState('');
  const [Versumme2, setVersumme2] = useState('');
  const [Prämie2, setPrämie2] = useState('');
  const [damage, setDamage] = useState('');
  const [userdata1, setuserdata1] = useState({});
  const [userdata2, setuserdata2] = useState({});
  const [data, setData] = useState([
    ['Jahre', 'P1', 'P2'],
    [1, 0, 0],
    [2, 0, 0],
    [5, 0, 0],          //setzt default Werte für die Chart
    [10, 0, 0],
    [15, 0, 0],
  ]);
  const [width, setwidth] = useState(100);

  useEffect(() => {
    setVersumme1(userdata1.versum);
    setPrämie1(userdata1.premium);  
  }, [userdata1]);

  useEffect(() => {
    setVersumme2(userdata2.versum);
    setPrämie2(userdata2.premium);  //setzt Werte, false mit dem Enter Compenent Werte geschickt werden
    setHausw(userdata2.hausw);
    setDamage(userdata2.damage);
  }, [userdata2]);

  const options = {
    width: '100%',
    bar: {
      groupWidth: '200%',
      alignment: 'center',
    },
    backgroundColor: {
      fill: '#C06C84',    //definiert, wie die Chart aussehen soll
    },
    vAxis: {
      format: '###,###',
    },
    hAxis: {
      format: '###,###',
      viewWindowMode: 'explicit',
      viewWindow: {
        max: width,
        min: 0,
      },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setwidth(data.max);

    if (Hauswert !== 0) {
      const versumme = Math.min(parseInt(Versumme1), parseInt(Hauswert));
      const damageNum = parseInt(damage);
      const hauswertNum = parseInt(Hauswert);
      const prämie1Num = parseInt(Prämie1);
      const versumme2 = Math.min(parseInt(Versumme2), parseInt(Hauswert));
      const prämie2Num = parseInt(Prämie2);
            
      setData(
          [
            ['Jahre', 'P1', 'P2'],
            [1, prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum],
            [2, 2 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, 2 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum],
            [5, 5 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum,5 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum],
            [10, 10 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, 10 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum], //setzt die Daten in die Chart
            [15, 15 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, 15 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum]
          ] 
        );
      }; 
    }

    
    function handleInputChange(event, setValue){
      const value = event.target.value;
    const isValidInput = /^\d*$/.test(value); //testet ob Input eine Zahl ist
    if (isValidInput) {
        setValue(value);
    }
    }
        
    return (
      <div>
        <Header />
        <Container fluid className='bootstrap_container'>
          <Row className='row'>
            <Col className='col instruction'>
              <Instruction
                shorttext='Mit diesem Tool können Sie zwei Prämien vergleichen.'
                longtext='Als Eingaben müssen Sie einen Schaden festlegen, einen Hauswert und zwei verschiedene Prämienkosten.'
              />
            </Col>
          </Row>
          <Row className='row'>
            <Col className='colform compare col-12 col-md-3'>
              <div className='form'>
                <input className='wideinput' type="text" placeholder="Versicherungssumme 1" value={Versumme1} onChange={(event) => handleInputChange(event, setVersumme1)} />
                <input className='wideinput' type="text" placeholder="Prämie 1" value={Prämie1} onChange={(event) => handleInputChange(event, setPrämie1)} />
                
              </div>
            </Col>
            <Col id='compareresult' className='col-12 col-md-6'>
              <div id='chart'>
                <Chart
                  chartType="BarChart"
                  data={data}
                  options={options}
                />
              </div>
              <input className='compresultinput' type="text" placeholder="Schaden" value={damage} onChange={(event) => handleInputChange(event, setDamage)} />
              <input className='compresultinput' type="text" placeholder="Hauswert" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)} />
              <button className='compresultinput' onClick={handleSubmit}>berechnen</button>
            </Col>
            <Col className='colform col-12 col-md-3 compare'>
              
              <div className='form'>
                <input className='wideinput' type="text" placeholder="Versicherungssumme 2" value={Versumme2} onChange={(event) => handleInputChange(event, setVersumme2)} />
                <input className='wideinput' type="text" placeholder="Prämie 2" value={Prämie2} onChange={(event) => handleInputChange(event, setPrämie2)} />
                <Popuper setuserdata={setuserdata1} text="gespeicherte Werte 1"/>
                <Enter hausw={Hauswert} versum={Versumme1} damage={damage} premium={Prämie1} text="Speichern 1"/>
                <Popuper setuserdata={setuserdata2} text="gespeicherte Werte 2" />
                <Enter hausw={Hauswert} versum={Versumme2} damage={damage} premium={Prämie2} text="Speichern 2" />
              </div>
              
              
              
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
}
export default Comparer;