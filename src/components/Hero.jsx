import React from "react";
import "../styles/hero.css";
import Saass from "../images/Saass.png";
import Saass2 from "../images/Saass2.png";
import Saass10 from "../images/Saass10.png";

import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-detail-cont">
        <h1>Save days from your webflow builds.</h1>
        <p>
        At ClientMagnet, we specialize in helping businesses attract and retain their ideal clients through innovative and effective outreach strategies.
        </p>
        <div className="hero-input-cont">
          <input type="text" name="" id="" placeholder="Enter Your Email" />
          <Button className="btn-hero" name="Start for free" />
        </div>
        <div className="hero-bottom-cont">
          <div className="check-div">
            <img src={Saass10} alt="" />
            <h5>Free 14-day Demo</h5>
          </div>
          <div className="check-div">
            <img src={Saass10} alt="" />
            <h5>Credit Card</h5>
          </div>
          <div className="check-div">
            <img src={Saass10} alt="" />
            <h5>No Setup</h5>
          </div>
        </div>
      </div>
      <div className="hero-image-cont">
        <img className="first-image" src={Saass} alt="" />
        <img className="second-image" src={Saass2} alt="" />
      </div>
    </div>
  );
}
