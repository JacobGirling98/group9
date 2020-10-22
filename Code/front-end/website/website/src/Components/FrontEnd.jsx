import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import NavBar from './NavBar';

const FrontEnd = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [webtierResponse, setWebtierResponse] = useState('');
    const [onlineStatus, setOnlineStatus] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const WEBTIERURL_RESPONSE = "http://127.0.0.1:8090/test";
    const WEBTIERURL_SENDDETAILS = "http://127.0.0.1:8090/login";
    //const WEBTIERURL_SUBMITOUTCOME = "http://127.0.0.1:8090/login";

    const handleUserNameChange = (changedUserName) => {
        setUserName(changedUserName);
        console.log("Changed user name");
    }

    const handleUserPasswordChange = (changedUserPassword) => {
        setUserPassword(changedUserPassword);
        console.log("Changed user password");
    }

    const handleSubmitButton = event => {
        event.preventDefault();
        postUserDetails(userName, userPassword);
        //console.log("Sending user details to webtier");
        console.log(userName, userPassword);
    }

    useEffect(() => {
        setTimeout(() => {
            getResponseWebTier()
        }, 1000);
    }, []);

    const getResponseWebTier = async () => {
        setLoadingStatus(true);
        console.log(onlineStatus);
        try {
            const res = await axios.get(WEBTIERURL_RESPONSE);
            const response = await res.data;
            console.log(response);
            setOnlineStatus(true);
            setLoadingStatus(false);
            console.log(loadingStatus);
        }
        catch (e) {
            console.log(e.message);
            console.log("This has failed");
            setOnlineStatus(false);
            setLoadingStatus(false);
        }
    }

    const postUserDetails = async (userName, userPassword) => {
        try {
            await axios.post(WEBTIERURL_SENDDETAILS, { "UN": { userName }, "PW": { userPassword } });
            setOnlineStatus(true);
            console.log("Sent info");
        }
        catch (e) {
            setOnlineStatus(false);
            console.log("Info not sent");
        }
    }

    {/*const getSubmitResult = async () => {
        try {
            const res = await axios.get(WEBTIERURL_SUBMITOUTCOME);
            const response = await res.data;
            if (response === true) {
                console.log("Login successful")
            }
            else {
                console.log("Login failed")
            }
        }
        catch(e) {
            console.log("Login failed")
        }
    }*/}

    return (
        <Router>
            <div>
                <Login
                    userDetails={{ userName, userPassword }}
                    handleUserNameChange={handleUserNameChange}
                    handleUserPasswordChange={handleUserPasswordChange}
                    //handleSubmitButton={handleSubmitButton}
                    postUserDetails={postUserDetails}
                />
                <p>{userName}</p>
                <p>{userPassword}</p>
                <NavBar />
            </div>
        </Router>
    );
}

export default FrontEnd;