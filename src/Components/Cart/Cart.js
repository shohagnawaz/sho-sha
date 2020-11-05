import React, { Fragment } from 'react';

const Cart = (props) => {

    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);


    return (
        <Fragment>
            <h4>Order Summry: </h4>
            <p>Items ordered: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
        </Fragment>
    );
}

export default Cart;