import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';



const Header = () => {
    // const user = useContext(UserContext);
    const auth = useAuth();
    
    console.log()
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                
                 {   
                    auth.user &&<span style={{color: 'yellow'}}>Welcome {auth.user.Name}</span>
                 
                   
                } 
                {
                    auth.user ?
                    <img src={auth.user.photo} style={{width:'25px',height:'25px', marginLeft:'10px'}} alt=""/>
                    : <a href="/login"></a>
                }
                {
                    auth.user ? <a href="/login">Sign Out</a>
                    : <a href="/login">Sign In</a>
                }
             </nav>
        </div>
    );
};

export default Header;