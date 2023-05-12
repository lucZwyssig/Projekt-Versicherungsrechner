import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Youfinished from '../Comps/Youfinished.js';
import Gamescores from '../Comps/Gamescores.js';
import Header from '../Comps/Header.js';
import Footer from '../Comps/Footer.js';

  
function Game() {
  

  const terms = [
    { quest: "Hauswert", ans: "Geschätzter finanzieller Wert einer Immobilie" },
    { quest: "Versicherungssumme", ans: "Maximaler Beitrag, den die Versicherung bezahlt" },
    { quest: "Hausratsversicherung", ans: "Versicherung zum Schutz einer Immobilie vor Schäden" },
    { quest: "Prämie", ans: "Regelmässiger Zahlungsbetrag für die Versicherung" },
    { quest: "Unterversicherung", ans: "Versicherungssumme ist kleiner als der Hauswert" },
    { quest: "Überversicherung", ans: "Versicherungssumme ist grösser als der Hauswert" },
    { quest: "Haftpflichtversicherung", ans: "Versicherung zum Schutz vor Schäden an Dritten" },
    { quest: "Teilkaskoversicherung", ans: "Deckt Schäden am eigenen Auto durch Dritte ab" },
    { quest: "Vollkaskoversicherung", ans: "Deckt Schäden komplett ab" }
  ]; //die Spielwerte. quest ist die Frage, ans ist die Antwort

  

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
      settime((prevTime) => prevTime + 1); //falls auf spielen gedrückt wird, wir die Zeit gestartet, Variablen eingestellt und die Fragen sortiert.
    }, 1000);
    setintervalID(id); 
  }


  function handleanswer(answer){
    if (answer == shuffledlist.find(item => item.quest == question)?.ans){
      setscore(score + 1);                                                      //falls geraten wird, wird geprüft, ob man recht hatte
      } else {
      setlives(lives - 1);
    }
    
  }
  
  useEffect(() => {
    if(shuffledlist.length != 0){
    const index = Math.floor(Math.random() * shuffledlist.length);
    const answer = shuffledlist[index].ans;
    const incorrect = shuffledlist.filter(item => item.ans != answer) //immer wenn der shuffledlist ändert, werden die Fragen, antworten gemischt
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
        clearInterval(intervalID); //Die liste wird gemischt wenn die leben, score, interval sich ändert
      }
    } else {

      setplayover(true);
        setendtime(time);
        settime(0);
        clearInterval(intervalID);
    }
  }, [lives, score, intervalID]);

  
// fix so that when answered correctly item is removed from list
  

return (
  <div>
    <Header />
    <Container fluid className='bootstrap_container'>
      <Row className='row'>
        <Col className='col instruction'>
          <Instruction
            shorttext='Wie gut kennen Sie die Begriffe der Versicherung?'
            longtext='Um das Spiel zu starten, klicken Sie auf "Spielen". Es wird ein Begriff und 4 mögliche Antworten zur Auswahl gestellt. Wählen Sie die richtige Antwort, um einen Punkt zu erhalten. Wählen Sie die falsche Antwort, verlieren Sie ein Leben. Bei 0 Leben ist das Spiel vorbei.'
          />
        </Col>
      </Row>
      {playover ? (
        <div>
          <Youfinished endtime={endtime} setplaynew={setplaynew} setplayover={setplayover} playover={playover} score={score} lives={lives} />
          
          
        </div>
      ) : (
        <div>
          {playnew ? (
            <div>
              <Row>
                <Col id='playbutton'>
                  <button onClick={() => handlestart()}>Spielen</button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Gamescores />
                </Col>
              </Row>
            </div>
          ) : (
            <div>
              <Row>
                <Col>
                  <h1>Begriff: {question}</h1>
                </Col>
              </Row>
              <Row>
                {choices.map((select, index) => (
                  <Col id='answercolumn' key={index}>
                    <button onClick={() => handleanswer(select)}>{select}</button>
                  </Col>
                ))}
              </Row>
              <Row className='justify-content-around gameinfo'>
                <Col className='col col-12 col-md-3 text-center'>
                  <h2>Score: {score}</h2>
                </Col>
                <Col className='col col-12 col-md-3 text-center'>
                  <h2>Lives: {lives}</h2>
                </Col>
                <Col className='col col-12 col-md-3 text-center'>
                  <h2>Time: {time} seconds</h2>
                </Col>
              </Row>
              <hr />
            </div>
          )}
        </div>
      )}
      <Footer/>
    </Container>
  </div>
);
}

export default Game;