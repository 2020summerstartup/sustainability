import React from "react";
import SignOutButton from "../SignOut";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Header = () => (
  <header>
    <div className="title">
      GO GREEN or GO HOME <FontAwesomeIcon icon="leaf" />
    </div>
  </header>
);

export default Header;
