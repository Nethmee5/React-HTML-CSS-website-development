import React, { useState, useEffect } from "react";
import "../Team/Team.css";
import Topbar from "../../Topbar/Topbar";

const Team = ({ data }) => {
  return (
    <>
      <Topbar className="topbar-container" />
      <div className="team-container">
        <div className="team-nav-bar">
          <nav className="navbar">
            <ul className="navList">
              <li className="navItem">
                <a className="link-item" href="/MOUNTAIN1/">
                  MOUNTAIN1
                </a>
              </li>
              <li className="navItem">
                <a className="link-item" href="/MOUNTAIN2/">
                  MOUNTAIN2
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="team-body">
          <div className="schedule">
            <h3>SCHEDULE</h3>
            <div className="list-container">
              <td className="list-items-container">
                <tr>25 Nov 2016</tr>
                <tr>28 Nov 2016</tr>
                <tr>25 Nov 2016</tr>
                <tr>28 Nov 2016</tr>
              </td>
              <td className="list-vera-container">
                <tr>estubuka/vera</tr>
                <tr>estubuka/vera</tr>
                <tr>estubuka/vera</tr>
                <tr>estubuka/vera</tr>
              </td>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
