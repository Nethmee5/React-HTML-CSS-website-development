import React, { useState, useEffect } from "react";
import "../Hero/Hero.css";
import logo from "../../assets/images/logo.jpg";

const Hero = ({ data }) => {
  return (
    <>
      <div className="hero-container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} class="logo-img" alt="logo-image" />
          </div>
          <ul className="navList">
            <li className="navItem">
              <a className="link-item" href="history">
                01.HISTORY
              </a>
            </li>
            <li className="navItem">
              <a className="link-item" href="/team/">
                02.TEAM
              </a>
            </li>
          </ul>
        </nav>
        <div className="title-container">
          <h2 className="title-1">LOSANGELES</h2>
          <h2 className="title-2">MOUNTAINS</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
