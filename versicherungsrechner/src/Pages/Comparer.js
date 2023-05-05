
import Header from '../Comps/Header.js';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions.js';
import {Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Popuper from '../Comps/Popuper.js';
import Chart from 'react-google-charts';
import Footer from '../Comps/Footer.js';


function Comparer () {  
  const [Versumme1, setVersumme1] = useState("");
  const [Hauswert, setHausw] = useState("");
  const [Prämie1, setPrämie1] = useState("");
  const [Versumme2, setVersumme2] = useState("");
  const [Prämie2, setPrämie2] = useState("");
  const [damage,setDamage] = useState("");
  const [userdata1, setuserdata1] = useState({});
  const [userdata2, setuserdata2] = useState({}); // continue here
 
  
  

  
  
   const [data, setData] = useState([
        ['Jahre', 'P1', 'P2'],
        [1, 0, 0],
        [2, 0, 0],
        [5, 0, 0],
        [10, 0, 0],
        [15, 0, 0]
      ]);
    const [width,setwidth] = useState(100);

    const options = {
      
        width: "100%",
        
    bar: { groupWidth: '200%',
            alignment: 'center'
},
        backgroundColor: {
            fill: '#C06C84',            
         },
         vAxis: {
            format: '###,###'
          },
          hAxis: {
            
            format: '###,###',
            viewWindowMode: 'explicit',
            viewWindow: {
                max: width,
                min: 0
            }
          },
         
     
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setwidth(data.max);
        
        
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
            <Container fluid className='bootstrap_container'>
            <Row className='row'>
            <Col className='col instruction' >
          <Instruction shorttext='Mit diesem Tool können Sie zwei Prämien vergleichen. ' 
          longtext='Als Eingaben müssen Sie einen Schaden festlegen, einen Hautwert  und zwei verschiedene Prämienkosten  ' />
          </Col>
          </Row>
          <Row className='row'>
            <Col className='colform compare  col-12 col-md-3' >
                               
                <input className='wideinput' type="text" placeholder="Versicherungssumme eingeben" value={Versumme1} onChange={(event) => handleInputChange(event, setVersumme1)}/>  
                    
                <input className='wideinput' type="text" placeholder="Prämie eingeben" value={Prämie1} onChange={(event) => handleInputChange(event, setPrämie1)}/>  
              
              <Popuper setuserdata={setuserdata1}/>
            </Col>
            
            
            <Col id='compareresult' className=' col-12 col-md-6'>
                <div id='chart'>
                    <Chart 
                        chartType="BarChart"
                        data={data}
                
                 
                        options={options}
                    />
            </div>
            <input className='compresultinput' type="text" placeholder="Schaden eingeben" value={damage} onChange={(event) => handleInputChange(event, setDamage)}/>
            <input className='compresultinput' type="text" placeholder="Hauswert eingeben" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)}/>            
            <button className='compresultinput'  onClick={handleSubmit}>Berechnen</button>         
            </Col>
            
            
            <Col className='colform col-12 col-md-3 compare'>
            
                <input className='wideinput' type="text" placeholder="Versicherungssumme eingeben" value={Versumme2} onChange={(event) => handleInputChange(event, setVersumme2)}/>
                    
                    
                <input className='wideinput' type="text" placeholder="Prämie eingeben" value={Prämie2} onChange={(event) => handleInputChange(event, setPrämie2)}/>
                     
                <Popuper setuserdata={setuserdata2}/>          
            </Col>
          </Row>
          <Footer/>
        </Container>

        </div>
    )
}
export default Comparer;