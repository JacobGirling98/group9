import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Login = () => {

    const [onLogin,setOnLogin] = useState("No response");

    useEffect(() => {
        const test = async () => {
            let response = await axios.get('/ENDPOINT');
            let people = await response.data;
            setOnLogin(people);
        }
        test();
    }, []);


    return (
        <>
        <section>
            <h2>Login screen</h2>
        </section>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Submit</button>
            <p>{onLogin}</p>
        </form>
        </>
    );
}

export default Login;