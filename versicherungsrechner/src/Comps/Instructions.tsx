import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Instruction({shorttext, longtext}: {shorttext: string, longtext: string}){
    const [expander, expandit] = useState("");


    function Expender(){
        
        expandit(longtext);
    }

    return(
        <div>
            <p>{shorttext}{expander}</p>
            <button onClick={(e)=> Expender()}>show more</button>
            
        </div>
    )

} export default Instruction;