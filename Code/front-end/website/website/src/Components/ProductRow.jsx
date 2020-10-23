import React from 'react';

export default function ProductRow(props) {
    return (
        <tr>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.buy}
            </td>
            <td>
                {props.product.sell}
            </td>
        </tr>
    )
}
