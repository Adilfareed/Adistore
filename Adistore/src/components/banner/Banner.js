import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
         <div className="text-content">
          <h1>SALES</h1>
          <p>Enjoy Latest sales with us.</p>
          <div className="ctas">
            <div className="banner-cta">Readmore</div>
            <div className="banner-cta v2"> Shop Now</div>
          </div>
        </div>
        <img src="./images/banner2.jpg" alt="my logo" />
      </div>
    </div>
  );
};

export default Banner;
