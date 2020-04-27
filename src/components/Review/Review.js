import React from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
//import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState([false]);

    const handlePlaceOrder = () => {
        console.log('order placed');
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
         const newCart = cart.filter(pd => pd.key !== productKey);
         setCart(newCart)
         removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        // cart data load this area!
        const savedCart = getDatabaseCart([]);
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(  key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    },[]);

    // let thankYou;
    // if(orderPlaced){
    //     thankYou  = <img src={happyImage} alt=""/>
    // } 
        

    return (
        <div className="twin-container">
           
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        key = {pd.key}
                        removeProduct = {removeProduct}
                        product={pd}></ReviewItem>)
                }
              
            {/* <div>
                    {
                      thankYou
                      
                    }
                <button onClick={removeProduct}>Close
                  
                  </button>
            </div> */}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;