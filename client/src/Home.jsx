import React from 'react';
import logo from "./assets/home.jpeg";
import Ex from "./ex";

function HomePage() {
  return (
    <div>
    <div className="homepic">
      <img src={logo} alt="" className="logo-img" />
    </div>
    <h1 className="elegantshadow">The Institute Speaks</h1>
    <Ex />
  </div>
  );
}

export default HomePage;
