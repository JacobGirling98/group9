import React from 'react';

export default function ProductRowDeal(props) {
    return (
        <tr>
            <td>
                {props.product.deal_time}
            </td>
            <td>
                {props.product.deal_type}
            </td>
            <td>
                {props.product.deal_amount}
            </td>
            <td>
                {props.product.deal_quantity}
            </td>
            <td>
                {props.product.counterparty_name}
            </td>
            <td>
                {props.product.instrument_name}
            </td>
        </tr>
    )
}