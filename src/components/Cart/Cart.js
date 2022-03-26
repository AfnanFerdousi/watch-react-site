import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleReset, handleRandom }) => {

    return (
        <div className='cart'>
            <h4>order summary</h4>
            <h5>Selected Item: </h5>
            <br />
            {
                cart.map(product => <h5 key={product.id}>{product.name}</h5>)
            }
            <div className="">
                <button onClick={handleRandom} className='btn btn-outline-success'>Choose One</button>
                <br />
                <button onClick={handleReset} className='btn btn-outline-danger mt-2'>Reset</button>
            </div>            
        </div>
    );
};

export default Cart;