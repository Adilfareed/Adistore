import React from "react";
import Catagory from "./components/catagory/Catagory";
import Banner from "./components/banner/Banner";


const Home = () => {
  return (
    <div className="home">
      <Banner/>
     <Catagory/>
    </div>
  );
};

export default Home;
