import React from 'react';

export default function ProductRowInstrument(props) {
    return (
        <tr>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.buy_avg}
            </td>
            <td>
                {props.product.sell_avg}
            </td>
        </tr>
    )
}
