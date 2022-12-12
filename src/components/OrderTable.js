import React from 'react';
import OrderRow from './OrderRow';
import items from '../data/items.js';

function OrderTable({ item }) {
    return (
        <div className="order-table">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                    {items.map((item, i) => <OrderRow item={items.at(i)} />)}
                </tbody>
            </table>
        </div>
    );
  }
  

export default OrderTable;