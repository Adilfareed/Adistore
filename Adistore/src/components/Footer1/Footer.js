import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import paymentimg from "../../images/payments.png"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
             Karachi Pakistan
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 03323743153</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email:adilkhan56888@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text"> Scrunchies</span>
          <span className="text"> Hair Catchers</span>
          <span className="text">Hair Clips</span>
          <span className="text">Hair Extensions</span>
          
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
           Adi's PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={paymentimg} alt="payments" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
