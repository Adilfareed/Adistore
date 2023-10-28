import React from "react";
import Product from "./product/Product";
import "./Products.scss";
const Products = ({innerpage,headingtext}) => {
  return (
    <>
     
      <div className="main-container">
        {!innerpage&&<div className="main-heading"> {headingtext}</div>}

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
