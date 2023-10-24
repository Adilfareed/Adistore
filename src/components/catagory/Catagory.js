import React from "react";
import "./Catagory.scss";
import catagoryimg from "../../images/catagory.jpg";
const Catagory = () => {
  return (
    <div className="main-catagory">
      <div className="catagories">
        <div className="catagory">
          <img className="catimg" src={catagoryimg} alt="catagory img" />
        </div>
        <div className="catagory">
          <img className="catimg" src={catagoryimg} alt="catagory img" />
        </div>
        <div className="catagory">
          <img className="catimg" src={catagoryimg} alt="catagory img" />
        </div>
        <div className="catagory">
          <img className="catimg" src={catagoryimg} alt="catagory img" />
        </div>
      </div>
    </div>
  );
};

export default Catagory;
