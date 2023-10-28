import React from "react";
import Footer from "../components/Footer1/Footer";
import Banner from "../components/banner/Banner";
import Catagory from "../components/catagory/Catagory";
import Products from "../components/Products/Products";
import Newsletter from "../components/footer/newslater/Newslater";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Catagory />
      <Products  headingtext="Popular Products" />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
