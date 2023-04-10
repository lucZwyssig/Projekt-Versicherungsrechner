import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../CSS.css';

function MYPopup() {
  const [saves, setSaves] = useState([]);
  const [pop, setpop] = useState(false);
  
  function toggle (){
    setpop(!pop);
    console.log(pop);
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
                <li key={singlesave._id}>{singlesave.test} </li>
              ))}
            </ul>
            <input type="button" onClick={(e) => toggle()} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <input type="button" id='popbutton'  value="change size of this button" onClick={(e) => toggle()} />
    </div>
  );
}

export default MYPopup;