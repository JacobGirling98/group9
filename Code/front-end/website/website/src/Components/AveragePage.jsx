import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRowInstrument from './ProductRowInstrument';
import instruments from './Static/instruments';

export default function AveragePage() {
    
    const [averageData, updateAverageData] = useState({});

    const WEBTIER_AVG = 'http://127.0.0.1:8090/client/testservice';

    useEffect(() => {
        getAverageData();
        console.log(instruments);
    }, []);

    const getAverageData = async () => {
        try {
            const res = await axios.get(WEBTIER_AVG);
            const response = await res.data;
            //console.log(response);
            console.log("Data retrieved");
            updateAverageData(response);
            console.log(averageData);
        }
        catch (e) {
            console.log(e.message);
            console.log("This has failed");
        }
    }

    /*const test_data = {
        "instruments" : {
            "instrument" : [
                {
                    "name" : "Me",
                    "buy" : 500,
                    "sell" : 100
                },
                {
                    "name" : "You",
                    "buy" : 400,
                    "sell" : 200
                }
            ]
        }
    }*/

    const our_data = instruments["instrument"];
        
    let rows = [];
    let counter = 0;

    our_data.forEach(product => {
        rows.push(<ProductRowInstrument product={product} key={counter}/>)
        counter = counter + 1;
    });
    
    return (
        <div>
            <h1>Instrument Report</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Avg. Buy Price
                        </th>
                        <th>
                            Avg. Sell price
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

