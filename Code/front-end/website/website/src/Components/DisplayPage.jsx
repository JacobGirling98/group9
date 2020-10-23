import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import AveragePage from './AveragePage';
import DisplayPageHome from './DisplayPageHome';
import ReportPage from './ReportPage';

const DisplayPage = (props) => {
   
    return (
        <>
        <header>
            <NavBar match={props.match}/>
        </header>
        <div>
            <Route exact path='/display' component={DisplayPageHome} />
            <Route exact path='/display/average' component={AveragePage} />
            <Route exact path='/display/report' component={ReportPage} />
        </div>
        </>
        
    );
}

export default DisplayPage;