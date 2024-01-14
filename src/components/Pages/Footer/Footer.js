import React, { useState, useEffect } from "react";
import "../Footer/Footer.css";
import logo from "../../assets/images/logo.jpg";

const Footer = ({ data }) => {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={logo} class="logo-img" alt="logo-image" />
        <div className="logo-header">
          LOSANGELES<br></br> MOUNTAINS
        </div>
      </div>
      <div className="footer-text">COPYRIGHT.2016.ALL RIGHT RESERVED.</div>
    </div>
  );
};

export default Footer;
