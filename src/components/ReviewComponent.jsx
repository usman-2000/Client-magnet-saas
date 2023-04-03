import React from "react";
import "../styles/reviewcomponent.css";
import rating from "../images/rating.png";
import Saass7 from "../images/Saass7.png";

export default function ReviewComponent() {
  return (
    <div className="review-main-cont">
      <h1>What our clients says</h1>
      <p className="review-main-cont-para">ClientMagnet has been an absolute game-changer for business.</p>
      <div className="review-cont">
        <div className="review-card">
          <div className="rating-star">
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
          </div>
          <p className="review-card-para">
          I was hesitant to try yet another outreach service, but ClientMagnet has blown me away with their results. Their team took the time to understand our unique needs and created a tailored approach that worked wonders for us. We've seen a huge uptick in qualified leads and have been able to close more deals than ever before. I'm grateful to have found such a reliable partner in ClientMagnet.
          </p>
          <img className="reviewer-image" src={Saass7} alt="" />
          <p className="reviewer-name">Courtney Henry</p>
        </div>
        <div className="review-card">
          <div className="rating-star">
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
          </div>
          <p className="review-card-para">
          ClientMagnet has been a true lifesaver for our small business. We were struggling to keep up with our outreach efforts while still managing all of our other responsibilities. But with their help, we've been able to streamline our outreach campaigns and achieve better results in less time. Their team is responsive, flexible, and always willing to go the extra mile. We're so grateful for everything they've done for us.
          </p>
          <img className="reviewer-image" src={Saass7} alt="" />
          <p className="reviewer-name">Courtney Henry</p>
        </div>
      </div>
    </div>
  );
}
