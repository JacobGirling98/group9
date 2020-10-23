import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link className="pageLink" to={`/display`}>Display Home</Link>
                </li>
                <li>
                    <Link className="pageLink" to={`/display/average`}>Average Data</Link>
                </li>
                <li>
                    <Link className="pageLink" to={`/display/report`}>Minimum Report</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;