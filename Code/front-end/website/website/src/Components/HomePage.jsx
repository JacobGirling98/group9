import React from 'react';
import Login from './Login';

export default function HomePage(props) {

    console.log(props.testing);

    return (
        <div>
            <Login match={props.match}/>
        </div>
    )
}
