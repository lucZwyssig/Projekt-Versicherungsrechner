import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../CSS.css';

function MYPopup(props) {
  const [saves, setSaves] = useState([]);
  const [pop, setpop] = useState(false);
  const [selectedSave, setSelectedSave] = useState(null);
  
  
  function toggle (){
    setpop(!pop);
    
  }

  async function fetchSaves() {
    try {
      const response = await axios.get('http://localhost:3001/api/saves');
      setSaves(response.data);
      } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSaves();
  }, []);

  if (pop) {
    return (
      <div className='popper'>
        <div className='overlay'>
          <div className='popperstuff'>
            <ul>
              {saves.map((singlesave) =>(
                <li key={singlesave._id}>{singlesave.premium}{singlesave.versum} <button onClick={(e) => console.log(singlesave)}>Einfügen</button></li>
                
              ))}
            </ul>
            <input id='savesbutton' type="button" onClick={(e) => toggle()} value="Schliessen"/>
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