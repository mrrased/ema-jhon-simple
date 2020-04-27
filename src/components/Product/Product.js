import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const {name, price, stock, seller,img,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in Order soon </small></p>
            { props.showAddToCart === true && <button className="main-button"
                onClick = {() => props.handleAddProduct(props.product)}
            >
                <span><FontAwesomeIcon icon={faShoppingCart} /></span> add to cert
                </button>}
            </div>
           
        </div>
    );
};

export default Product;