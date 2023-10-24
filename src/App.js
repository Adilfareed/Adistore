import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Header from "./components/Header";
import Catagories from "./Catagories";
import SingleProduct from "./SingleProduct";
import AppContext from "./utils/Contex";
import Newsletter from "./components/footer/newslater/Newslater";
import Footer from "./components/Footer1/Footer";
import Banner from "./components/banner/Banner";
import Catagory from "./components/catagory/Catagory";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catagories/:id" element={<Catagories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </AppContext>
      </Router>
      <Banner />
      <Catagory />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
