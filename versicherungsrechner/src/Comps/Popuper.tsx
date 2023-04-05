import { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../CSS.css';

interface Save {
  _id: string;
  test: number;
}

function MYPopup() {
  const [saves, setSaves] = useState<Save[]>([]);
  const [pop, setpop] = useState(false);
  function toggle (){
    setpop(!pop);
    console.log(pop);
  }

  async function fetchSaves() {
    try {
      const response = await axios.get<Save[]>('http://localhost:3001/api/saves');
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
              )
              )}
             </ul>
          <input type="button" onClick={(e) => toggle()} />
          </div>
          </div>
        </div>
      );
    }
  
    return (
    <input type="button" value="change size of this button" onClick={(e) => toggle()} />
    );
  
  
}

export default MYPopup;