import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart}) => {
    const { name, img, price} = product;

    return (
            <div className='product col-md-4 border-danger border-5 '>
                <img className='w-100' src={img} alt="shoe" />
                <div className="product-info">
                <h4 className='mt-2 text-success'>{name}</h4>
                <p >Author: <span className='text-danger fw-bold'>Charlese Dickens</span></p>
                <h5 className='mt-2'>Price: <span className='text-info'>${price}</span></h5>
                </div>
            <button onClick={() => handleAddToCart(product)} className='btn btn-primary rounded mt-4'>
                    Add to Cart
                </button>
            </div>
        
    );
};

export default Product;