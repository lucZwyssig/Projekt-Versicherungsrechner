import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Youfinsished from '../Comps/Youfinished.js';
import Gamescores from '../Comps/Gamescores.js';
import Header from '../Comps/Header.js';

  
function Game() {
  

  const terms = [
    { quest: "Hauswert", ans: "Bezieht sich auf den geschätzten finanziellen Wert einer Immobilie" },
    { quest: "Versicherungssumme", ans: "Bezieht sich auf den maximalen Beitrag, die die Versicherung bezahlen wird." },
    { quest: "Hausratsversicherung", ans: "Eine Art der Versicherung, der eine Immobilie gegen Schaden absichert." },
    { quest: "Prämie", ans: "Betrag, den man regelmässig für die Versicherung bezahlt."},
    { quest: "Unterversicherung", ans: "Tritt auf, wenn die Versicherungssumme kleiner ist als der Hauswert"},
    { quest: "Überversicherung", ans: "Tritt auf, wenn die Versicherungssumme grösser ist als der Hauswert." },
    { quest: "Haftpflichtversicherung", ans: "Form der Versicherung, die den Versicherungsnehmer von Schaden and dritten schützt." },
    { quest: "Teilkaskoversicherung",  ans: "Deckt Schaden am eigenen Auto ab, die durch dritten verursacht wurden."},
    { quest: "Vollkaskoversicherung", ans: "Deckt Schaden am eingenen Auto ab, die durch dritten und auch sich selbst verursacht wurden."}
  ];

  

  const [lives, setlives] = useState(3);
  const [question, setquestion] = useState("")
  const [shuffledlist, setshuffledlist] = useState([]);
  const [choices, setchoices] = useState ([]);
  const [score, setscore] = useState(0);   
  const [playnew, setplaynew] = useState(true);
  const [playover, setplayover] = useState(false);
  const [endtime, setendtime] = useState(0);
  const [time, settime] = useState(0);
  const [intervalID, setintervalID] = useState(null);  
  

  function handlestart() {
    setshuffledlist(terms.sort(() => Math.random() - 0.5));
    setplaynew(false);
    setlives(3);
    setscore(0);
    const id = setInterval(() => {
      settime((prevTime) => prevTime + 1);
    }, 1000);
    setintervalID(id); 
  }


  function handleanswer(answer){
    if (answer == shuffledlist.find(item => item.quest == question)?.ans){
      setscore(score + 1);
      
      
      
    } else {
      setlives(lives - 1);
    }
    
  }
  
  useEffect(() => {
    if(shuffledlist.length != 0){
    const index = Math.floor(Math.random() * shuffledlist.length);
    const answer = shuffledlist[index].ans;
    const incorrect = shuffledlist.filter(item => item.ans != answer)
    .map(item => item.ans).sort(() => Math.random() -0.5).slice(0,2);
    setquestion(shuffledlist[index].quest);
    setchoices([...incorrect, answer].sort(() => Math.random() -0.5))
    }



  }, [shuffledlist]);

  

  useEffect(() => {
    if (score < 3) {
      if (lives > 0) {
        setshuffledlist(terms.sort(() => Math.random() - 0.5));
      } else {
        setplayover(true);
        setendtime(time);
        settime(0);
        clearInterval(intervalID); 
      }
    } else {
      setplayover(true);
    }
  }, [lives, score, intervalID]);

  
// fix so that when answered correctly item is removed from list
  

  return (
    <div>
    <Header/>
    <Container fluid className='bootstrap_container'>
      
      <Row className='row'>
        <Col className='col instruction'>
          <Instruction
            shorttext='Wie gut kennen Sie die Begriffe Der Versicherung? '
            longtext='Um das Spiel zu Starten muss auf "play" gedrückt werden. Es wird ein Begriff und 4 mögliche Antworten zur Auswahl gestellt. Wählen Sie die 
                  richtige Antwort, erhalten Sie einen Punkt, wählen sie die falsche Antwort, verlieren Sie ein Leben. Bei 0 Leben ist das Spiel vorbei.'
          />
        </Col>
      </Row>
      {playover ? (
        <div>
          <Youfinsished endtime={endtime} setplaynew={setplaynew} setplayover={setplayover} playover={playover}/>
          {endtime}
          
        </div>
      ) : (
        <div>
          {playnew ? (
            <div>
              <Row>
                <Col>
                  <button id='playbutton' onClick={() => handlestart()}>play</button>
                
                </Col>
              </Row>
              <Row>
                <Col>
                <Gamescores/>
                </Col>
              </Row>
            </div>
            

            ) : (
              <div>
                <Row>
                  <Col>
                    <p>Score: {score}</p>
                  </Col>
                  <Col>
                    <p>Lives: {lives}</p>
                  </Col>
                  <Col>
                  {time}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1>{question}</h1>
                  </Col>
                </Row>
                <Row>
                  {choices.map((select, index) => (
                    <Col key={index}>
                      <button onClick={() => handleanswer(select)}>{select}</button>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
        </div>
      )}
      
  
    </Container>
    </div>
  );
}

export default Game;