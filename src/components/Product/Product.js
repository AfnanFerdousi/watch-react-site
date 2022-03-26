import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart}) => {
    const { name, img, price} = product;

    return (
        <div className='product card col-md-4 mb-3' style={{ width: '17rem' }}>
            <div className="card-img-top">
                <img className='w-100' src={img} alt="Book" />
            </div>       
                {/* Item Card */}
                <div className="product-info">
                <h4 className='mt-2 card-title'>{name}</h4>
                <p className='card-subtitle'>Author: <span className='text-danger fw-bold'>Charlese Dickens</span></p>
                <h5 className='mt-2'>Price: <span className='text-success'>${price}</span></h5>
                </div>
            <button onClick={() => handleAddToCart(product)} className='btn btn-primary rounded mt-4'>
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                </button>
            </div>


        
    );
};

export default Product;