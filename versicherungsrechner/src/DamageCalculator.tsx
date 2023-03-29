import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css';
function Calculator () {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}
export default Calculator;

