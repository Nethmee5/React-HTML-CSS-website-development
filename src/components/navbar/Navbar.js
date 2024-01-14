import React, { useState, useEffect } from "react";
import "../navbar/Navbar.css";
import logo from "../assets/images/logo.jpg";

const Navbar = ({ data }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} class="logo-img" alt="logo-image" />
          <div className="logo-header">
            LOSANGELES<br></br> MOUNTAINS
          </div>
        </div>
        <ul className="navList">
          <li className="navItem">
            <a className="link-item" href="/History/">
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
    </div>
  );
};

export default Navbar;
