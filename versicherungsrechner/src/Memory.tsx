import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css';
function Memory () {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calculator">Rechner</Link>
                </li>
                <li>
                    <Link to="/comparer">Rechner</Link>
                </li>                
            </ul>
        </div>
    )
}
export default Memory;
