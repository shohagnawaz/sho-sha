import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../fakeData';
import Product from './Product/Product';

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handlerAddProduct = (product) => {
        console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product handlerAddProduct={handlerAddProduct} product={pd}></Product>)
                    }
            </div>

            <div className="cart-container">
                <h1>This is cart</h1>
                <h4>Order Summary: {cart.length}</h4>
            </div>
        </div>
    );
}

export default Shop;