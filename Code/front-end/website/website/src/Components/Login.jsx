import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPage from './DisplayPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Login = props => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [webtierResponse, setWebtierResponse] = useState('');
    const [onlineStatus, setOnlineStatus] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const WEBTIERURL_RESPONSE = "http://127.0.0.1:8090/test";
    const WEBTIERURL_SENDDETAILS = "http://127.0.0.1:8090/login";
    //const WEBTIERURL_SUBMITOUTCOME = "http://127.0.0.1:8090/login";

    useEffect(() => {
        setTimeout(() => {
            getResponseWebTier()
            //console.log(`${props.match.url}`);
        }, 1000);
    }, []);
    
    const handleUserNameChange = (changedUserName) => {
        setUserName(changedUserName);
        console.log("Changed user name");
    }

    const handleUserPasswordChange = (changedUserPassword) => {
        setUserPassword(changedUserPassword);
        
    }

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
            const res = await axios.post(WEBTIERURL_SENDDETAILS, { "UN": { userName }, "PW": { userPassword } });
            const response = await res.data;
            console.log(response);
            setOnlineStatus(true);
            if (response === "Invalid username or password.") {
                props.changeStatus();
            }
        }
        catch (e) {
            setOnlineStatus(false);
            console.log("Info not sent");
        }
    }

    const handleSubmitButton = event => {
        event.preventDefault();
        postUserDetails(userName, userPassword);
        console.log("Sending user details to webtier");
        console.log(userName, userPassword);
    }

    return (
        <>
            {(onlineStatus) ?
                <h3>Connected to Webtier</h3> :
                <h3>Not Connected to Webtier</h3>
            }
            <form onSubmit={handleSubmitButton}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>Name:</p>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="userName"
                                    value={userName}
                                    onChange={event => { handleUserNameChange(event.target.value) }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Password</p>
                            </td>
                            <td>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="userPassword"
                                    value={userPassword}
                                    onChange={event => { handleUserPasswordChange(event.target.value) }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <input type="submit" value="submit" />
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default Login;