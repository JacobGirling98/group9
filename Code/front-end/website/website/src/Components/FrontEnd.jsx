import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Login from './Login';
import HomePage from './HomePage';
import DisplayPage from './DisplayPage';
import NavBar from './NavBar';
import TestPage from './TestPage';

const FrontEnd = () => {

    const [loginState, setLoginState] = useState(false);

    const changeLoginStatus = () => {
        setLoginState(true);
        console.log("Status changed");
    }

    return (
        <Router>
            <Route exact path = '/' render={() => <Login changeStatus={changeLoginStatus} testing="test"/>} />
            <Route path='/display' render={()=> <DisplayPage />} />
            {loginState ? 
                <Redirect to='/display' /> :
                null
            }
        </Router>
    );
}

export default FrontEnd;