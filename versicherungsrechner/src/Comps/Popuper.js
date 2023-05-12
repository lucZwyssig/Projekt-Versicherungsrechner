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
      const response = await axios.get(`http://44.214.43.36:3001/api/calculator`); //Daten vom Backend werden mit einem GET request geholt
      setsaves(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchsaves(); //Daten werden geholt, wenn die Seite geladen wird
  }, []);

  const expandsave = (singlesave) => {
    setselectedsave(singlesave);
  };

  return (
    <div>
      {pop && selectedsave === null ? (
        <div className='popper'>
          <div className='overlay'>
            <div className='popperstuff'>
              <ul>
                {saves.map((singlesave) => (
                  <li key={singlesave._id}>
                    <b>{singlesave.name}</b> 
                    <div>
                      <button onClick={(e) => props.setuserdata(singlesave)}>Einfügen</button>
                      <button onClick={(e) => expandsave(singlesave)}>erweitern</button>
                    </div>
                  </li>
                ))}
              </ul>
              <input id='savesbutton' type="button" onClick={() => toggle()} value="Schliessen"/>
            </div>
          </div>
        </div>
      ) : pop && selectedsave !== null ? (
        <div className='popper'>
          <div className='overlay'>
            <div className='popperstuff'>
              <div className='poppercontent'>
                <h2>{selectedsave.name}</h2>
                <p>Versum: {selectedsave.versum}</p>
                <p>Hausw: {selectedsave.hausw}</p>
                <p>Schaden: {selectedsave.damage}</p>
                <p>Prämie: {selectedsave.premium}</p>
                <input id='savesbutton' type="button" onClick={(e) => setselectedsave(null)} value="Zurück"/>
                {props.collection}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <input type="button" id='popbutton' value={props.text} onClick={(e) => toggle()} />
        </div>
      )}
    </div>
  );
}

export default MYPopup;