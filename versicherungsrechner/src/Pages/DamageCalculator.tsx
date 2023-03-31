import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Comps/Header';
import Instruction from '../Comps/Instructions';

function Calculator () {
    return(
        <div>
           <Header/>
           <Instruction shorttext='shorttest' longtext='longtest'/>
           <form>
            <input type="text" placeholder="Versicherungssumme eingeben"/>
            <input type="text" placeholder="Schaden eingeben"/>
            <input type="text" placeholder="Hauswert eingeben"/>

            </form>   
        </div>
    )
}
export default Calculator;

