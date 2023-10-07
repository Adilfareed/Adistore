import React from "react";
import "./Header.scss";
import { Context } from "../utils/Contex";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div >
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Catagories</li>
          </ul>
        </div>
        <div className="middle">
          <h1>Adi's.</h1>
        </div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
