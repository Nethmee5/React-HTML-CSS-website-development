import React, { useState, useEffect } from "react";
import "../Topbar/Topbar.css";

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="title-container">
        <div className="title-number">02.</div>
        <div className="title-context">
          <div className="title-text">CLIMB</div>
        </div>
      </div>
      <div className="content-team">
        Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
        quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor
        nec congue.
      </div>
    </nav>
  );
};

export default Topbar;
