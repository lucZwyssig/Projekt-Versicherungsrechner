import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

function Comparer () {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/memory">Memory</Link>
                </li>
                <li>
                    <Link to="/calculator">Rechner</Link>
                </li>                
            </ul>
        </div>
    )
}
export default Comparer;
