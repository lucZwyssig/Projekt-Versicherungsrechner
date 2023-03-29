import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link } from 'react-router-dom';

function Home () {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/memory">Memory</Link>
                </li>
                <li>
                    <Link to="/calculator">Rechner</Link>
                </li>
                <li>
                    <Link to="/comparer">Rechner</Link>
                </li>                
            </ul>
        </div>
    );
    

    


}

export default Home;
