import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

const DisplayPage = (props) => {
    return (
        <>
        <header>
            <Header match={props.match}/>
        </header>
        <div>
            <Router>
                <Route path={`${props.match.url}`} component={FilmDescription} />
            </Router>
        </div>
        </>
        
    );
}

export default DisplayPage;