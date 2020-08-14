import React from "react";
import InfoCards from "./infoCards";
import AddtoHomeScreen from "./addToHomeScreen";

const InfoPage = () => (
  <div className="base-container">
    <InfoCards />
    {/* Fancy card for adding app to home screen */}
    <AddtoHomeScreen />
  </div>
);

export default InfoPage;
