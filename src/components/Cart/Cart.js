import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleReset, handleRandom }) => {

    return (
        <div className='cart'>
            <h4>order summary</h4>
            <h5>Selected Item: </h5>
            <br />
            {
                cart.map(product => [
                    <div className="d-flex my-1">
                        <img className='w-25 ' src={product.img} alt="books" />
                        <h6 className='ms-2 pt-4' key={product.id}>{product.name}</h6>
                    </div>
                ] )
            }
            <div className="mt-3">
                <button onClick={handleRandom} className='btn btn-outline-success'>Choose One</button>
                <br />
                <button onClick={handleReset} className='btn btn-outline-danger mt-2'>Reset</button>
            </div>            
        </div>
    );
};

export default Cart;