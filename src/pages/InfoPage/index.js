import React from "react";
import InfoCards from "./infoCards";
import AddtoHomeScreen from "./addToHomeScreen";
import FBContactForm from "./fbContactForm";

const InfoPage = () => (
  <div className="base-container">
    <InfoCards />
    <AddtoHomeScreen />
    <FBContactForm />
  </div>
);

export default InfoPage;
