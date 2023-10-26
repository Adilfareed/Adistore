import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import productimg from "../images/products.jpg";
import "./SingleProduct.scss";

const SingleProduct = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <img className="productimg" src={productimg} alt="productimg " />
        </div>
        <div className="right">
          <span className="name "> Beautiful butterfly hair clip </span>
          <span className="price"> $30</span>
          <span className="desc">
            
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <div className="cart-system">
            <span>-</span>
            <span>5</span>
            <span>+</span>
            <span>
              <FaCartPlus /> Add To CArt
            </span>
          </div>
          <div className="icons">
            <span> Share</span>
            <span>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaPinterest />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
