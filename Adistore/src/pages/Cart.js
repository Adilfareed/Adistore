import React from 'react'
import {MdClose} from "react-icons/md"
import{BsCartX} from "react-icons/bs"
import "./Cart.scss"

const Cart = ({setshowcart}) => {
  return (
    <div className='cart-panel'>
      <div className='opec-layer'>

      </div>
      <div className='cart-content'> 
      <div className='cart-header'>
        <span className='heading'> Shopping Cart</span>
        
        <span className='close-button' onClick={()=>setshowcart(false)}>
       
          <MdClose/>
      </span>
      </div>
     {/*div className='empty cart'>
      
        <span > <BsCartX/></span>
        <span>No Item In The Cart</span>
        <button className='Button'> Return To Shop</button>
         
       </div>*/}
       <div className='cart-footer'>
        <span className='total' > subtotal: </span>
        <span className='price'>  1288</span>
        
       </div>
       <div className='check-div'>
       <button className='check-button'>CHECKOUT</button></div>

      </div>
    </div>   
  )
}

export default Cart