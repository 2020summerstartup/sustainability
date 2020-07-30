import React from "react";
import InfoCards from "./infoCards";
import FBContactForm from "./fbContactForm";
import PwaCard from "./pwa";

const InfoPage = () => (
  <div className="base-container">
    <PwaCard />
    <InfoCards />
    <FBContactForm />
  </div>
);

export default InfoPage;
