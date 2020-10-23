import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRowDealer from './ProductRowDealer';
import traders from './Static/traders';

export default function ReportPage() {

    const [reportData, updateReportData] = useState({});

    const WEBTIER_REP = 'http://127.0.0.1:8090/client/testservice';

    useEffect(() => {
        getReportData();
        //visualize(reportData);

    }, []);

    const getReportData = async () => {
        try {
            const res = await axios.get(WEBTIER_REP);
            const response = await res.data;
            console.log("Data retrieved");
            updateReportData(response);
            console.log(response);
        }
        catch (e) {
            console.log(e.message);
            console.log("This has failed");
        }
    }

    const our_data = traders["trader"];

    let rows = [];
    let counter = 0;

    our_data.forEach(product => {
        rows.push(<ProductRowDealer product={product} key={counter}/>)
        counter = counter + 1;
    });

    return (
        <div>
            <h1>Dealer Report</h1>
            <table >
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            End Position
                        </th>
                        <th>
                            Realised PL
                        </th>
                        <th>
                            Effective PL
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
