import React from "react";
import "../styles/ratecard.css";

export default function RateCard(props) {
  return (
    <div className="ratecard-cont">
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
    </div>
  );
}
