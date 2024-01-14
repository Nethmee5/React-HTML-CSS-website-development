import React, { useState, useEffect } from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/Pages/Hero/Hero';
import History from './components/Pages/History/History';
import Team from './components/Pages/Team/Team';
import Footer from './components/Pages/Footer/Footer';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  const isMobile = window.innerWidth <= 767;

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 767) {
  //       setActiveTab(null);
  //     }
  //   };

    // window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);s
  //   // };
  // }, []);

  return (
    <>
      {isMobile ? (
        <div className="tabs-container">
          <div className="tabs">
            <div className={`tab ${activeTab === "Hero" ? "active" : ""}`} onClick={() => handleTabClick("Hero")}>
              Hero
            </div>
            <div className={`tab ${activeTab === "History" ? "active" : ""}`} onClick={() => handleTabClick("History")}>
              History
            </div>
            <div className={`tab ${activeTab === "Team" ? "active" : ""}`} onClick={() => handleTabClick("Team")}>
              Team
            </div>
            <div className={`tab ${activeTab === "Footer" ? "active" : ""}`} onClick={() => handleTabClick("Footer")}>
              Footer
            </div>
          </div>

          <div className="accordion-content">
            {activeTab === "Hero" && <Hero />}
            {activeTab === "History" && <History />}
            {activeTab === "Team" && <Team />}
            {activeTab === "Footer" && <Footer />}
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <Navbar />
          <History />
          <Team />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
