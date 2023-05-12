import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Enter(props) {
  const [name, setName] = useState("Eintrag");
  const [show, setshow] = useState(false);
  const [hausw, setHausw] = useState("");
  const [versum, setVersum] = useState("");
  const [damage, setDamage] = useState("");
  const [premium, setPremium] = useState("");

  const postdatatocalculator = async (data) => {
    try {
      const response = await axios.post('http://44.214.43.36:3001/api/calculatorpost', data);
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleentersubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      name: name,
      hausw: parseInt(hausw),
      versum: parseInt(versum),
      damage: parseInt(damage),
      premium: parseInt(premium)
    };
  
    await postdatatocalculator(formData);
  }

  const handleinputchange = (event, setValue) => {
    const value = event.target.value;
    const isValidInput = /^\d*$/.test(value);
    if (isValidInput) {
      setValue(value);
    }
  }

  const handleclosebuttonclick = () => {
    setshow(false);
  }

  if (show) {
    return (
      <div>
        <div className='popper'>
          <div className='overlay'>
            <div className='popperstuff' id="enterstuff">
              <form onSubmit={handleentersubmit}>
                
                  
                <input className='enterinput' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                
                
                <input className='enterinput' type="text" placeholder="Hauswert" value={hausw} onChange={(event) => handleinputchange(event, setHausw)} />
                
                
                <input className='enterinput' type="text" value={versum} placeholder='Versicherungssumme' onChange={(event) => handleinputchange(event, setVersum)} />
                
               
                <input className='enterinput' type="text" value={damage} placeholder="Schaden" onChange={(event) => handleinputchange(event, setDamage)} />
                
                
                <input className='enterinput' type="text" value={premium} placeholder='Prämie' onChange={(event) => handleinputchange(event, setPremium)} />
                
                <button type="submit">Submit</button>
                <button type="button" onClick={handleclosebuttonclick}>Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => {
        setHausw(props.hausw);
        setVersum(props.versum);
        setDamage(props.damage);
        setPremium(props.premium);
        setshow(true);
      }}>{props.text}</button>
    </div>
  );
}

export default Enter;