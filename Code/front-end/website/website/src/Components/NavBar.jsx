import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link className="pageLink" to="/">Home</Link>
                </li>
                <li>
                    <Link className="pageLink" to="/streamed">Streamed Data</Link>
                </li>
                <li>
                    <Link className="pageLink" to="/average">Average Buy and Sell</Link>
                </li>
                <li>
                    <Link className="pageLink" to="/ending">Ending</Link>
                </li>
                <li>
                    <Link className="pageLink" to="/realisedprofit">Realised Profit</Link>
                </li>
                <li>
                    <Link className="pageLink" to="/effectiveprofit">Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;