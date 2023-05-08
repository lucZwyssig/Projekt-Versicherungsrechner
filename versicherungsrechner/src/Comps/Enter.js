import { useEffect, useState } from 'react';
import axios from 'axios';

function Enter(props) {
  const [name, setName] = useState("Eintrag");
  const [show, setshow] = useState(false);
  const [hausw, setHausw] = useState("");
  const [versum, setVersum] = useState("");
  const [damage, setDamage] = useState("");
  const [premium, setPremium] = useState("");

  const postDataToCalculator = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/calculatorpost', data);
      console.log('Data posted successfully:', response.data);
     
    } catch (error) {
      console.error('Error posting data:', error);
      
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      name: name,
      hausw: parseInt(props.hausw),
      versum: parseInt(props.versum),
      damage: parseInt(props.damage),
      premium: parseInt(props.premium)
    };
  
    await postDataToCalculator(formData);
  }

  const handleInputChange = (event, setValue) => {
    const value = event.target.value;
    const isValidInput = /^\d*$/.test(value); // Regex for numbers 0-9
    if (isValidInput) {
      setValue(value);
    }
  }

  if (show) {return (

    <div>
      <div className='popper'>
        <div className='overlay'>
          <div className='popperstuff'>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" value={hausw} onChange={(event) => handleInputChange(event, setHausw)} />
              <input type="text" value={versum} onChange={(event) => handleInputChange(event, setVersum)} />
              <input type="text" value={damage} onChange={(event) => handleInputChange(event, setDamage)} />
              <input type="text" value={premium} onChange={(event) => handleInputChange(event, setPremium)} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
  return(
    <div>
        <button onClick={() => {
            setHausw(props.hausw);
            setVersum(props.versum);
            setDamage(props.damage);
            setPremium(props.premium);
            setshow(true)}}>Save</button>
    </div>
  )
}

export default Enter;