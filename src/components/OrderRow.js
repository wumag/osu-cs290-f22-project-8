import React from 'react';
import '../App.css';
import SelectQuantity from './SelectQuantity';

function OrderRow({ item }) {
    return (
        <div className="order-row">
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><SelectQuantity/></td>
            </tr>
        </div>
    );
}

export default OrderRow;