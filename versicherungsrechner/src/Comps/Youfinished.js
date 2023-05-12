import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS.css"
import axios from 'axios';

function Youfinished(props) {
  const [name, setName] = useState("Neuer Spieler");
  const [time, setTime] = useState(0);

  const handlePlayNew = () => {
    postDataToGame(formData);
    props.setplayover(false);
    props.setplaynew(true);       //wenn auf schliessen gedrückt wird, werden Daten zur Datenbank geschickt, und variablen in Game.js verändert.
    
  };
  const handlePlayNewlost = () => {
    props.setplayover(false);
    props.setplaynew(true); 
  }

  const postDataToGame = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/gamepost', data);
      console.log('Data posted successfully:', response.data);    //mit einem POST request wird auf dem Backend zugegriffen
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const formData = {
    name: name,
    time: time //die Daten die gepostet werden
  };

  useEffect(() => {
    setTime(props.endtime);
  }, [props.playover]); //die Zeit der Game wird gemessen

  return (
    <div id={props.lives > 0 ? 'won' : 'lost'}>
      <div className='overlay'>
        {props.lives > 0 ? (
          <div id='won' className='popperstuff'>
            <h1>Score: {props.score}</h1>
            <h1>Time: {time}</h1>
            <button onClick={handlePlayNew}>Schliessen</button>
            <h1>Geben Sie einen Namen ein</h1>
            <input type='text' placeholder='Name eingeben' onChange={(e) => setName(e.target.value)}></input>
          </div>
        ) : (
          <div id='lost' className='popperstuff'>
            <h1>Score: {props.score}</h1>
            <h1>Time: {time}</h1>
            <button onClick={handlePlayNewlost}>Schliessen</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Youfinished;