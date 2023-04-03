import React from "react";
import "../styles/services.css";
import Button from "./Button.jsx";
import Saass11 from "../images/Saass11.png";
import Saass12 from "../images/Saass12.png";
import Saass13 from "../images/Saass13.png";

export default function Services() {
  return (
    <div className="service-cont">
      <div className="service-first-cont">
        <h1>Build & Launch Without problems</h1>
        <p>
        Choose ClientMagnet for expert outreach strategies that attract and retain your ideal clients with precision and efficiency. Our advanced targeting, personalized approach, and powerful analytics provide the tools you need to succeed.
        </p>
        <Button className="btn-hero btn2" name="Get Started" />
      </div>
      <div className="service-second-cont">
        <div className="service">
          <img src={Saass11} alt="" />
          <p>
          ClientMagnet's advanced targeting features allow you to reach your ideal clients with precision and efficiency. Our platform uses data-driven insights and powerful algorithms to identify the best prospects for your business based on a wide range of criteria, including demographics, interests, and behaviors. With ClientMagnet, you can be confident that your outreach efforts are focused on the right audience, maximizing your chances of success.
          </p>
        </div>
        <div className="service">
          <img src={Saass12} alt="" />
          <p>
          At ClientMagnet, we understand the importance of personalization when it comes to effective outreach. That's why our platform allows you to create customized messages and content that speak directly to your target audience. Whether you're sending emails, making phone calls, or reaching out through social media, you can tailor your approach to fit the unique needs and preferences of each prospect. With ClientMagnet, you can build real connections with your clients and stand out from the competition.
          </p>
        </div>
        <div className="service">
          <img src={Saass13} alt="" />
          <p>
          ClientMagnet's powerful analytics and reporting features give you valuable insights into the effectiveness of your outreach efforts. Our platform tracks key metrics such as open rates, click-through rates, and conversion rates, allowing you to measure the impact of your campaigns and make data-driven decisions. You can easily generate detailed reports and visualizations that help you understand what's working and what's not, and adjust your strategy accordingly. With ClientMagnet, you can optimize your outreach efforts and achieve better results over time.
          </p>
        </div>
      </div>
    </div>
  );
}
