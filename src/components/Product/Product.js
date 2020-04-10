import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, price, stock, seller,img} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <br/>
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in Order soon </small></p>
            <button className="main-button"
                onClick = {() => props.handleAddProduct(props.product)}
            >
                <span><FontAwesomeIcon icon={faShoppingCart} /></span> add to cert</button>
            </div>
           
        </div>
    );
};

export default Product;