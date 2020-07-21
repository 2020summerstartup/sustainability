import React from "react"; // Used to also import "{ Component }", removed because it gave a warning
import MuiContactForm from "./muiContactForm";
import InfoCards from "./infoCards";

const InfoPage = () => (
  <div className="base-container">
    <InfoCards />
    <MuiContactForm />
  </div>
);

export default InfoPage;
