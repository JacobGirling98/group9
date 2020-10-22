import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import HomePage from './HomePage';
import DisplayPage from './DisplayPage';
import NavBar from './NavBar';

const FrontEnd = () => {

    const [loginState, setLoginState] = useState(false);

    const changeLoginStatus = () => {
        setLoginState(true);
        console.log("Status changed");
    }

    return (
        <Router>
            {loginState ?
                <Route exact path='/display' component={DisplayPage} /> :
                <Route path = '/' render={() => <Login changeStatus={changeLoginStatus} testing="test"/>} />
            }
        </Router>


        /*<Router>
            <Route exact path='/' render={() => <Login changeStatus={changeLoginStatus} testing="test"/>} />
            <Route path = '/display' component={DisplayPage}  />
                <HomePage 
                    userDetails={{ userName, userPassword }}
                    handleUserNameChange={handleUserNameChange}
                    handleUserPasswordChange={handleUserPasswordChange}
                    //handleSubmitButton={handleSubmitButton}
                    postUserDetails={postUserDetails}
                />
                <NavBar />
        </Router>*/
    );
}

export default FrontEnd;