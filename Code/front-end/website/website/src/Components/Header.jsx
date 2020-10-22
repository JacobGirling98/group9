import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <div>
            <NavBar match={props.match}/>
        </div>
    );
}

export default Header;