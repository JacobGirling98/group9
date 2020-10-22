import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Login = props => {

    const [onLogin,setOnLogin] = useState("No response");

    {/*useEffect(() => {
        const test = async () => {
            let response = await axios.get('/ENDPOINT');
            let people = await response.data;
            setOnLogin(people);
        }
        test();
    }, []);*/}


    return (
        <>
        <section>
            <h2>Login screen</h2>
        </section>
        <form>
            <input 
                type="text" 
                placeholder="Username"
                value={props.userDetails.userName}
                onChange={event => {props.handleUserNameChange(event.target.value)}} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={props.userDetails.userPassword}
                onChange={event => {props.handleUserPasswordChange(event.target.value)}} 
            />
            <button>Submit</button>
            <p>{onLogin}</p>
        </form>

        {/*<p>{props.userDetails.userName}</p>
        <p>{props.userDetails.userPassword}</p>*/}
        </>
    );
}

export default Login;