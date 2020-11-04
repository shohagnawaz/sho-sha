import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {

    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - Order Soon</p>
                <button onClick={ () => props.handlerAddProduct(props.product)} 
                        className="main-button"><FontAwesomeIcon icon={ faCartPlus } /> 
                        add to cart
                </button>
            </div>
        </div>

    );
}

export default Product;