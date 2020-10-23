import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRowDeal from './ProductRowDeal';
import deals from './Static/deals';

export default function DealPage() {
    
    const our_data = deals["deal"];
        
    let rows = [];

    let counter = 0;

    our_data.forEach(product => {
        rows.push(<ProductRowDeal product={product} key={counter}/>)
        counter = counter + 1;
    });
    
    return (
        <div>
            <h1>Deals</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Deal Time
                        </th>
                        <th>
                            Deal Type
                        </th>
                        <th>
                            Deal Amount
                        </th>
                        <th>
                            Deal Quantity
                        </th>
                        <th>
                            Counterparty Name
                        </th>
                        <th>
                            Instrument Name
                        </th>
                    </tr>  
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}