import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleReset }) => {
    let name;

    for (const product of cart) {
        name = product.name;
    }


    return (
        <div className='cart'>
            <h4>order summary</h4>
            <h5>Selected Item: {name}</h5>
            <div className="">
                <button className='btn btn-outline-success'>Choose One</button>
                <br />
                <button onClick={() => handleReset(cart)} className='btn btn-outline-danger mt-2'>Reset</button>
            </div>            
        </div>
    );
};

export default Cart;