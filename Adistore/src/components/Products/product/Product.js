import React from 'react'
import productimg from "../../../images/products.jpg"
import "./Product.scss"
const Product = () => {
  return (
    <div className='product-cart'>
      <div className='thumbnail'> <img className='thumbimg' src={productimg} alt='product img'/></div>
      <div className='product-details'>
        <span className='name' >product nsme</span>
        <span className='price'>$499 </span>
      </div>
    </div>
  )
}

export default Product