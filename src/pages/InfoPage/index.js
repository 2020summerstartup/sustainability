import React from "react";
import InfoCards from "./infoCards";
import AddtoHomeScreen from "./addToHomeScreen";
import FBContactForm from "./fbContactForm";

const InfoPage = () => (
  <div className="base-container">
    <AddtoHomeScreen />
    {/* <PwaCard /> */}
    <InfoCards />
    <FBContactForm />
  </div>
);

export default InfoPage;
