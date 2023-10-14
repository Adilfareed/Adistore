import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Header from "./components/Header";
import Catagories from "./Catagories";
import SingleProduct from "./SingleProduct";
import ApppContext from "./utils/Contex";
import Newsletter from "./components/footer/newslater/Newslater";
import Footer from "./components/Footer1/Footer";


const App = () => {
  return (

    <> <ApppContext>
      <Header />
      <Newsletter/>
      <Footer/>
      </ApppContext>
      
    </>
  );
};

export default App;
