import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Errorpage from "./pages/Errorpage";
import Header from "./components/Header";
import Catagories from "./pages/Catagories";
import SingleProduct from "./pages/SingleProduct";
import AppContext from "./utils/Contex";



const App = () => {
  return (
    <>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/Adistore" element={<Home />} />
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
      
    </>
  );
};

export default App;
