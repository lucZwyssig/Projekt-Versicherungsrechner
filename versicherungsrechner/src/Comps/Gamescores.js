import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gamescores() {
  const [scores, setscores] = useState([]);
  const [sortedscores, setsortedscores] = useState([]);
  
  async function fetchsaves() {
    try {
      const response = await axios.get(`http://localhost:3001/api/game`);
      setscores(response.data); //mit einem GET request werden Daten des Backends gelesen
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchsaves(); //beim laden der Seite werden die Daten gelesen
  }, []);

  

  useEffect(() => {
    setsortedscores([...scores].sort((first, second) => first.time - second.time)); //die datenbankeinträge werden nach der Zeit sortiert
  }, [scores]);

  return (
    <div id='gamescores'>
      <h1>Rangliste</h1>
      
      <ol>
        {sortedscores.map((singlescore) => {
          return (
            <li key={singlescore._id}>
              <b>{singlescore.name}</b>
              <p>{singlescore.time}s</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Gamescores;