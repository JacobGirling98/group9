import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import HomePage from './HomePage';
import DisplayPage from './DisplayPage';
import NavBar from './NavBar';

const FrontEnd = () => {

    return (
        <Router>
            <Route exact path='/' component={HomePage} />
            <Route path = '/display' component={DisplayPage} />
                {/*<HomePage 
                    userDetails={{ userName, userPassword }}
                    handleUserNameChange={handleUserNameChange}
                    handleUserPasswordChange={handleUserPasswordChange}
                    //handleSubmitButton={handleSubmitButton}
                    postUserDetails={postUserDetails}
                />
                <NavBar />*/}
        </Router>
    );
}

export default FrontEnd;