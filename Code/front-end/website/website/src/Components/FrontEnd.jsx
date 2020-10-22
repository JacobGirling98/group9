import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from './Login';

const FrontEnd = () => {
    
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [webtierResponse, setWebtierResponse] = useState('');
    const [onlineStatus, setOnlineStatus] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const handleUserNameChange = (changedUserName) => {
        setUserName(changedUserName);
        console.log("Changed user name");
    }

    const handleUserPasswordChange = (changedUserPassword) => {
        setUserPassword(changedUserPassword);
        console.log("Changed user password");
    }
    
    

    const WEBTIERURL = "http://127.0.0.1:8090/test"

    useEffect(() => {
        setTimeout(() => {
            getResponseWebTier()
        }, 1000);
    }, []);

    const getResponseWebTier = async () => {
        setLoadingStatus(true);
        console.log(onlineStatus);
        try {
            const res = await axios.get(WEBTIERURL);
            console.log(res);
            const response = await res.data;
            console.log(response);
            setOnlineStatus(true);
            setLoadingStatus(false);
            console.log(loadingStatus);
        }
        catch(e) {
            console.log(e.message);
            console.log("This has failed");
            setOnlineStatus(false);
            setLoadingStatus(false);
        }
    }

    const postUserDetails = async (userName, userPassword) => {
        try {
            await axios.post(WEBTIERURL, [userName, userPassword]);
            setOnlineStatus(true);
        }
        catch(e) {
            
        }
    }
    
    return (
        <div>
            <Login 
                userDetails = {{userName, userPassword}}
                handleUserNameChange={handleUserNameChange}
                handleUserPasswordChange={handleUserPasswordChange}
            />
            <p>{userName}</p>
            <p>{userPassword}</p>
        </div>
    );
}

export default FrontEnd;