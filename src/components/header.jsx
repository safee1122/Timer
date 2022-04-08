import React from "react";
import logo from "../assets/logo.svg";
import "../assets/css/header.css";

function Header() {
  return (
    <div className="wrapper">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="..." />
      </div>
      <div className="headerContent">
        <h1>
          Find Profitable Crypto <br /> Opportunities before Anyone Else!
        </h1>
        <p>
          See how with my brand new blockchain analytics platform, Blocksight.
        </p>
        <div className="vid">
          <iframe
            width="700px"
            height="500px"
            src="https://www.youtube.com/embed/TWQn896YyHs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="v1"></div>
        <div className="v2"></div>
      </div>
    </div>
  );
}

export default Header;
