import React from "react";
import "./Banner.css";
import cityImage from "../../assets/city-homepage.jpg";

function Banner() {
  return (
    <div className="first_section">
      <div className="left">
        <h1>Help keep each other safe</h1>
        <p>
          The world is upside down. Everything has changed. We are actively
          monitoring the coronavirus (COVID‑19) situation and are taking steps
          to help keep those that rely on our platform safe.
        </p>
        <button className="learnMoreButton">Learn More</button>
      </div>
      <div className="right">
        <img src={cityImage} alt="City" />
      </div>
    </div>
  );
}

export default Banner;
