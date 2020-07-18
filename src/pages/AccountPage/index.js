import React, { useEffect, useContext } from "react";

import leaderBoardUpdate, {
  assignRanking,
} from "../CompetePage/leaderBoardUpdate.js";
import { getUser, getDorm } from "../../services/Firebase";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import PhoneIcon from "@material-ui/icons/Phone";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";

import AccountTabs from "./AccountTabs";

function assignDorm(data) {
  if (data.userDorm === "") {
    alert("Sorry, please choose your dorm in setting!");
  } else {
    localStorage.setItem("dorm", data.userDorm);
  }
}

function AccountPage() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  leaderBoardUpdate();

  const authContext = useContext(AuthUserContext);

  getUser(authContext.email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.exists) {
        assignDorm(docSnapshot.data());
      } else {
        alert("Sorry, please choose your dorm in setting!");
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  getDorm()
    .doc(localStorage.getItem("dorm"))
    .onSnapshot(
      (docSnapshot) => {
        assignRanking(docSnapshot.data());
      },
      (error) => {
        console.error("Error: ", error);
      }
    );

  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <>
          <AccountTabs />
          {/* <div className="base-container">
          </div> */}
          </>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
