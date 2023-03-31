import React, { FormEvent, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Instruction from '../Comps/Instructions';

function Calculator () {
    const [Versumme, setVersumme] = useState(0);
    const [Schaden, setSchaden] = useState(0)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
      };
      
    
    
      return (
        <div>
          <Header />
          <Instruction shorttext='shorttest' longtext='longtest' />
          <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Versicherungssumme eingeben" onChange={event => setVersumme(event.target.valueAsNumber)}/>
            <input type="text" placeholder="Schaden eingeben" />
            <input type="text" placeholder="Hauswert eingeben" />
            <input type="submit" value="submit" />
         </form>
        
        </div>
      );
}
export default Calculator;

