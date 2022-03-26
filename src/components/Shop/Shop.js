import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Card = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    let intialValue = [];

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        setCart([...cart, {
            name: product.name,
            id: product.id,
            img: product.img

        }]);

    }
    const handleReset = () => {
        setCart(intialValue)
    }

    const handleRandom = () => {
        setCart([cart[parseInt(Math.random() * cart.length)]])
    } 
    return (
        <div className='shop-container container d-md-flex'>
            <div className="products-container row col-md-9 p-border col-sm-12">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product} handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container c-border px-4 py-3 mx-4 col-md-3 col-sm-12">
                <Cart cart={cart} handleReset={handleReset} handleRandom={handleRandom} ></Cart>
            </div>
        </div>
    );
};

export default Card;