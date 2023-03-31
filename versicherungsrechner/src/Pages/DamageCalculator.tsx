import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Header from '../Comps/Header';
import Instruction from '../Comps/Instructions';

function Calculator () {
    return(
        <div>
           <Header/>
           <Instruction shorttext='morrolester' longtext='morrolessssssster'/>
           
        </div>
    )
}
export default Calculator;

