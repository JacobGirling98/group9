import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRow from './ProductRow';

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

    
    const test_data = {
        "instruments" : {
            "instrument" : [
                {
                    "name" : "Me",
                    "buy" : 500,
                    "sell" : 100
                },
                {
                    "name" : "You",
                    "buy" : 500,
                    "sell" : 100
                }
            ]
        }
    }


    const our_data = test_data["instruments"]["instrument"];
        
    let rows = [];

    our_data.forEach(product => {
        rows.push(<ProductRow product={product} />)
    });
    
    return (
        <div>
            <p>Test Report</p>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
