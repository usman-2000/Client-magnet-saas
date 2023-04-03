import React from "react";
import "../styles/ratecardcomponents.css";
import RateCard from "./RateCard";

export default function RateCardComponents() {
  return (
    <div className="ratecardcomp-cont">
      <RateCard
        className="first-div"
        h1="+22K"
        p="At ClientMagnet, we understand the importance of data security and take it very seriously. We use state-of-the-art encryption and security protocols to ensure that all client data is fully protected at all times. With us, you can have peace of mind knowing that your confidential information is always safe and secure."
      />
      <RateCard
        h1="+35K"
        p="At ClientMagnet, we're committed to delivering the highest quality service to our clients. Our team of experienced professionals uses cutting-edge technology and best practices to ensure that your outreach campaigns are both effective and efficient. We pride ourselves on delivering results that exceed expectations, and we're always looking for ways to improve our services even further."
      />
      <RateCard
        h1="+66K"
        p="At ClientMagnet, we believe that excellent customer support is key to building long-lasting relationships with our clients. Our friendly and knowledgeable support team is available to answer any questions or concerns you may have, and we're always happy to provide guidance and support whenever you need it. Whether you're just getting started or have been with us for years, we're here to help you succeed."
      />
    </div>
  );
}
