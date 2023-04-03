import React from "react";
import "../styles/businessstrategy.css";
import Saass4 from "../images/Saass4.png";
import Saass5 from "../images/Saass5.png";
import Saass6 from "../images/Saass6.png";
import Button from "./Button";

export default function BusinessStrategy() {
  return (
    <div className="business-cont">
      <h1>We help your business grow faster.</h1>
      <p className="main-p">
        Why kept very ever home mrs. Considered sympathize ten uncommonly
        occasional assistance sufficient.
      </p>
      <div className="business-card-cont">
        <div>
          <img src={Saass4} alt="" />
          <h3>Offending belonging</h3>
          <p>
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a href="">Read more</a>
        </div>
        <div>
          <img src={Saass5} alt="" />
          <h3>Promotion & provision</h3>
          <p>
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a href="">Read more</a>
        </div>
        <div>
          <img src={Saass6} alt="" />
          <h3>Blessing application</h3>
          <p>
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a href="">Read more</a>
        </div>
      </div>
      <Button className="btn1" name="More About Platform" />
    </div>
  );
}
