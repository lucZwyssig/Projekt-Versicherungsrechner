import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Instruction({shorttext, longtext}: {shorttext: string, longtext: string}){
    
    const [show, showchange] = useState(false);
    return(
        <div>
            <p>
                {show ? [shorttext, longtext] : shorttext}
            </p>
            <button onClick={(e)=> showchange(!show)}>{show ? "show less" : "show more"}</button>
            
        </div>
    )

} export default Instruction;