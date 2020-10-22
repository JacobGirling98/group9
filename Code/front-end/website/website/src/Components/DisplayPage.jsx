import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import HistoricPage from './HistoricPage';

const DisplayPage = (props) => {
    
    {/*const websites = {
        'historic' : {HistoricPage},
        'report' : {ReportPage}
    };*/}
    
    return (
        <>
        <header>
            <Header match={props.match}/>
        </header>
        <div>
            <Router>
                <Route path={`${props.match.url}`} component={HistoricPage} />
                <Route exact path={`${props.match.url}`} />
            
                {/*<main>
                    <HistoricPage />
                </main>*/}
            </Router>
        </div>
        </>
        
    );
}

export default DisplayPage;