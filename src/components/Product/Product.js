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
                
                <div className="product-info">
                <h4 className='mt-2 card-title'>{name}</h4>
                <p className='card-subtitle'>Author: <span className='text-danger fw-bold'>Charlese Dickens</span></p>
                <h5 className='mt-2'>Price: <span className='text-success'>${price}</span></h5>
                </div>
            <button onClick={() => handleAddToCart(product)} className='btn btn-primary rounded mt-4'>
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                </button>
            </div>

//         <div className="card" style="width: 18rem;">
//   <img src="..." className="card-img-top" alt="...">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
        
    );
};

export default Product;