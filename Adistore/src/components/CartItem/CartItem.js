import React, { useContext } from "react";

import { MdClose } from "react-icons/md";
import cartimg from "../../images/products.jpg"
import "./cartitem.scss";
const CartItem = () => {
    return(
    <>
    <div className="cart-products">
    <div className="cart-product">
        <div className="image-container">
            <img src={cartimg}/>
        </div>
        <div className="prod-details">
            <span className="name"> Butterfly Catcher</span>
            <MdClose className="close-btn"/>
            <div className="quantity-buttons">
            <span >-</span>
            <span >5</span>
            <span >+</span>
            </div>
            <div className="text">
            <span >3</span>
            <span >x</span>
            <span  className="highlight">$66</span>

            </div>
        </div>
    </div>
    </div>
    </>
    )
};

export default CartItem;
