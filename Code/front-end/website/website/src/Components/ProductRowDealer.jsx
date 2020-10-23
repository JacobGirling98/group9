import React from 'react';

export default function ProductRowDealer(props) {
    return (
        <tr>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.end_position}
            </td>
            <td>
                {props.product.realized_PL}
            </td>
            <td>
                {props.product.effective_PL}
            </td>
        </tr>
    )
}