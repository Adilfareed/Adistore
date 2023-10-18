import React from "react";
import Catagory from "./components/catagory/Catagory";
import Banner from "./components/banner/Banner";
import Products from "./components/Products/Products";


const Home = () => {
  return (
    <div className="home">
      <Banner/>
     <Catagory/>
     <Products/>
    </div>
  );
};

export default Home;
