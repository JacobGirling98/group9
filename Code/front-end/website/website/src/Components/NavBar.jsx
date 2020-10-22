import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link className="pageLink" to={`${props.match.url}`}>Display Home</Link>
                </li>
                <li>
                    <Link className="pageLink" to={`${props.match.url}/historic`}>Historical Data</Link>
                </li>
                <li>
                    <Link className="pageLink" to={`${props.match.url}/report`}>Minimum Report</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;