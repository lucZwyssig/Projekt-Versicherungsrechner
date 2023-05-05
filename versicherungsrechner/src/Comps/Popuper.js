import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../CSS.css';

function MYPopup(props) {
  const [saves, setsaves] = useState([]);
  const [pop, setpop] = useState(false);
  const [selectedsave, setselectedsave] = useState(null);
  
  function toggle (){
    setpop(!pop);  
  }

  async function fetchsaves() {
    try {
      const response = await axios.get('http://localhost:3001/api/saves');
      setsaves(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchsaves();
  }, []);

  const expandsave = (singlesave) => {
    setselectedsave(singlesave);
  };

  if (pop && selectedsave == null) {
    return (
      <div className='popper'>
        <div className='overlay'>
          <div className='popperstuff'>
            <ul>
              {saves.map((singlesave) =>(
                <li key={singlesave._id}><b>{singlesave.name}</b> 
                  <button onClick={(e) => props.setuserdata(singlesave)}>Einfügen</button>
                  <button onClick={(e) => expandsave(singlesave)}>erweitern</button>
                </li>
              ))}
            </ul>
            <input id='savesbutton' type="button" onClick={(e) => toggle()} value="Schliessen"/>
          </div>
        </div>
      </div>
    );
  } else if (pop && selectedsave != null) {
    return (
      <div className='popper'>
        <div className='overlay'>
          <div className='popperstuff'>
            <h2>{selectedsave.name}</h2>
            <p>Versum: {selectedsave.versum}</p>
            <p>Hausw: {selectedsave.hausw}</p>
            <p>Schaden: {selectedsave.damage}</p>
            <p>Prämie: {selectedsave.premium}</p>
            <input id='savesbutton' type="button" onClick={(e) => setselectedsave(null)} value="Zurück"/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <input type="button" id='popbutton'  value="Saves " onClick={(e) => toggle()} />
    </div>
  );
}

export default MYPopup;