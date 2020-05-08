import React from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
//import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState([false]);
    const auth =useAuth();

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
            {
                !cart.length && <h1>Your cart is Empty. <a href="/shop"> keep Shopping</a></h1>
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="shipment">
                    
                        {   
                            auth.user ?
                            <button onClick={handlePlaceOrder} className="main-button">Proceed to Shipment</button>
                            :<button onClick={handlePlaceOrder} className="main-button">Login to Proceed</button>
                            }
                    </Link>             
                </Cart>
            </div>
        </div>
    );
};

export default Review;