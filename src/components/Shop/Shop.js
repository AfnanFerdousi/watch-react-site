import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Card = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const handleReset = (cart) => {
        
    }
    return (
        <div className='shop-container container d-flex'>
            <div className="products-container row col-md-8 p-border">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product} handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container c-border px-4 py-3 mx-4 col-md-4">
                <Cart cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Card;