import React from "react";
import Product from "./product/Product";
import "./Products.scss";
const Products = ({innerpage}) => {
  return (
    <>
     
      <div className="main container">
        {!innerpage&&<div className="main-heading"> Popular Products</div>}

        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Products;
