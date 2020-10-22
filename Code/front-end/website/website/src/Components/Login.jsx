import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Login = props => {

    const handleSubmitButton = event => {
        event.preventDefault();
        //props.postUserDetails(props.userDetails.userName, props.userDetails.userPassword);
        props.postUserDetails("Tom", "Jacob");
        console.log("Sending user details to webtier");
        //console.log(props.userDetails.userName, props.userDetails.userPassword);
        console.log("Tom", "Jacob");
    }

    return (
        <>
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
                                    value={props.userDetails.userName}
                                    onChange={event => { props.handleUserNameChange(event.target.value) }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Passport</p>
                            </td>
                            <td>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="userPassword"
                                    value={props.userDetails.userPassword}
                                    onChange={event => { props.handleUserPasswordChange(event.target.value) }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <input type="submit" value="submit" />
                        </tr>
                    </tbody>
                </table>
            </form>

            {/*<p>{props.userDetails.userName}</p>
            <p>{props.userDetails.userPassword}</p>*/}
        </>
    );
}

export default Login;