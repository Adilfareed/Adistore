import React from "react";
import Products from "../components/Products/Products";
import "./Catagories.scss"

const Catagories = () => {
  return (
    <>
      
      <div className="title"> Catagories Title</div>
      <div>
        <Products innerpage={true}/>
      </div>
    </>
  );
};

export default Catagories;
