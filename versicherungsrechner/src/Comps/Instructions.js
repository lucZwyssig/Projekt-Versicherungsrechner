import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';





function Instruction({shorttext, longtext}){
    
    const [show, showchange] = useState(false);
    return(
        <div>
            <p>
                {show ? [shorttext, longtext] : shorttext}
            </p>
            <button onClick={(e)=> showchange(!show)}>{show ? "weniger anzeigen" : "mehr anzeigen"}</button>
            </div>
            
    )

} export default Instruction;