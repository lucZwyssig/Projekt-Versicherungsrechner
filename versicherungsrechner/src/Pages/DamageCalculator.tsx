import React, { FormEvent, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Instruction from '../Comps/Instructions';
 // change variable names to english

function Calculator () {
    const [Versumme, setVersumme] = useState(0);
    const [Schaden, setSchaden] = useState(0);
    const [Hauswert, setHausw] = useState(0);
    const [damage, setdamage] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       setdamage(Versumme/Hauswert*Schaden);
      };
      
      
    
    
      return (
        <div>
          <Header />
          <Instruction shorttext='shorttest' longtext='longtest' />
          <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Versicherungssumme eingeben" onChange={event => setVersumme(event.target.valueAsNumber)}/>
            <input type="number" placeholder="Schaden eingeben" onChange={event => setSchaden(event.target.valueAsNumber)}/>
            <input type="number" placeholder="Hauswert eingeben" onChange={event => setHausw(event.target.valueAsNumber)}/>
            <input type="submit" value="submit" />
         </form>
         <div>
            {damage}
         </div>
        
        </div>
      );
}
export default Calculator;

