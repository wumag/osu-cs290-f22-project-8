import React from 'react';
import OrderTable from '../components/OrderTable';
import OrderRow from '../components/OrderRow';

function HomePage(){
    return (
        <>
            <h2>Welcome to Kwik-E-Mart's Ordering Page</h2>
            <p>We sell the usual fare at extraordinarily high prices!</p>
            <p>Select the quantities of goodies you would like to purchase</p>
            <OrderTable/>
        </>
    )
}

export default HomePage;