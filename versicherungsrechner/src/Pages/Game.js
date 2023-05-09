import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../Comps/Footer.js'
import Stopwatch from '../Comps/Stopwatch.js';
import Youlost from '../Comps/Youfinished.js';
import Youfinsished from '../Comps/Youfinished.js';
import Gamescores from '../Comps/Gamescores.js';

function Game(props) {
  

  const terms = [
    { quest: "a", ans: "A" },
    { quest: "b", ans: "B" },
    { quest: "c", ans: "C" },
    { quest: "d", ans: "D" },
    { quest: "e", ans: "E" },
    { quest: "f", ans: "F" },
    { quest: "g", ans: "G" },
    { quest: "h",  ans: "H"}
  ];

  const [lives, setlives] = useState(3);
  const [question, setquestion] = useState("")
  const [shuffledlist, setshuffledlist] = useState([]);
  const [choices, setchoices] = useState ([]);
  const [score, setscore] = useState(0);
  const [playnew, setplaynew] = useState(true);
  const [playover, setplayover] = useState(false);
  
  
  

  function handlestart(){
    setshuffledlist(terms.sort(() => Math.random() -0.5));
    setplaynew(false);
    setlives(3);
    setscore(0);
       
    

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
    if (score < 3){
    if (lives > 0) {
      setshuffledlist(terms.sort(() => Math.random() - 0.5));
    }

    else{
      
      setplayover(true);
      
      
    }
  } else{
    setplayover(true);

  }
  }, [lives, score]);

  

  

  return (
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
          <Youfinsished score={score} setplaynew={setplaynew} setplayover={setplayover}  playover={playover}/>
          
        </div>
      ) : (
        <div>
          {playnew ? (
            <div>
              <Row>
                <Col>
                  <button onClick={() => handlestart()}>play</button>
                
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
  );
}

export default Game;