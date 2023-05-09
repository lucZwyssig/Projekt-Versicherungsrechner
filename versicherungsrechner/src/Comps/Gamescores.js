import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gamescores() {
  const [scores, setscores] = useState([]);
  const [sortedscores, setsortedscores] = useState([]);

  async function fetchsaves() {
    try {
      const response = await axios.get(`http://localhost:3001/api/game`);
      setscores(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchsaves();
  }, []);

  useEffect(() => {
    setsortedscores(scores);
    sortedscores.sort((first, second) => first.time - second.time);
  }, [scores]);

  return (
    <div>
      <ul>
        {sortedscores.map((singlescore) => {
          
            <li key={singlescore._id}>
              <b>{singlescore.name}</b>
              <p>{singlescore.time}</p>
            </li>
          
        })}
      </ul>
    </div>
  );
}

export default Gamescores;