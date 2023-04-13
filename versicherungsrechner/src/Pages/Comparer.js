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
  const [Hauswert, setHausw] = useState("");
  const [Prämie1, setPrämie1] = useState("");
  const [Versumme2, setVersumme2] = useState("");
  
  const [Prämie2, setPrämie2] = useState("");
  const [damage,setDamage] = useState("");
  
  

  function handleExportSave(save) {
    
    
    
  }
  
   const [data, setData] = useState([
        ['Jahre', 'P1', 'P2'],
        [1, 0, 0],
        [2, 0, 0],
        [5, 0, 0],
        [10, 0, 0],
        [15, 0, 0]
      ]);

    const options = {
      
        width: "100%",
        
    bar: { groupWidth: '150%',
            alignment: 'center'
},
        backgroundColor: {
            fill: '#D9D9D9',            
         },
         vAxis: {
            format: '###,###'
          },
          hAxis: {
            
            format: '###,###',
            viewWindowMode: 'explicit',
            viewWindow: {
                max: 10000,
                min: 0
            }
          },
         
     
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        if (Hauswert != 0 ){
            
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
                    [10, 10 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, 10 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum],
                    [15, 15 * prämie1Num + damageNum - (versumme / hauswertNum) * damageNum, 15 * prämie2Num + damageNum - (versumme2 / hauswertNum) * damageNum]
                  ] 
        )
                
            } else {
                alert("Wert von 0 ist nicht möglich!");
            }
    
        
      }; 

    
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
            <Col className='colform '>
            
                    <Col className='mor'>
                        <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme1} onChange={(event) => handleInputChange(event, setVersumme1)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Prämie eingeben" value={Prämie1} onChange={(event) => handleInputChange(event, setPrämie1)}/>
                    </Col>
                    
                    
                    
                
              
              <Popuper exportSave={handleExportSave}/>
            </Col>
            
            
            <Col className='result '>
            <Chart 
                chartType="BarChart"
                data={data}
                 
                options={options}
            />
            <input type="text" placeholder="Schaden eingeben" value={damage} onChange={(event) => handleInputChange(event, setDamage)}/>
            <input type="text" placeholder="Hauswert eingeben" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)}/>            
            <button onClick={handleSubmit}></button>         
            </Col>
            
            
            <Col className='colform '>
            
                    <Col className='mor'>
                        <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme2} onChange={(event) => handleInputChange(event, setVersumme2)}/>
                    </Col> 
                    <Col className='mor'>
                        <input type="text" placeholder="Prämie eingeben" value={Prämie2} onChange={(event) => handleInputChange(event, setPrämie2)}/>
                    </Col>            
            </Col>
          </Row>

        </Container>

        </div>
    )
}
export default Comparer;