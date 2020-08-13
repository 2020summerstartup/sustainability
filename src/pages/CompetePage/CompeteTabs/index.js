import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router";

// admin stuff
import { AuthUserContext } from "../../../services/Session";
import * as ROLES from "../../../constants/roles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Leaderboard from "./leaderboard";
import ProgressCircle from "../../../components/ProgressCircle";
// import ComingSoon from "./comingSoon";
// import AdminPage from "../../AdminPage";

// Material UI Imports
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarIcon from "@material-ui/icons/Star";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// For Compete Header
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as SusLogo1 } from "../../../img/logo_skin1.svg";

import firebase from "firebase/app";
import { getUserDocRef } from "../../../services/Firebase";

const ComingSoon = lazy(() => import("./comingSoon"));
const AdminPage = lazy(() => import("../../AdminPage"));

// Functions from Material UI for tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  var tabNumber = value;

  const getRole = () => {
    // Check if the email address is associated with any of the current users.
    var email = localStorage.getItem("email");
    getUserDocRef(email).onSnapshot(() => {
      // Now we want to see if this user is already an admin.
      // Following two lines get the user id of the currenlty logged in user
      var userId = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref("/users/" + userId)
        .once("value")
        .then(function (snapshot) {
          var role = (snapshot.val() && snapshot.val().roles) || "Anonymous";
          // The following if statement doesn't actually achieve anything right now. It's supposed to fix the console error that occurs when
          // a non-admin types in the URL of the admin page, but the if statement doesn't run soon enough to prevent that error.
          if (role.ADMIN || tabNumber < 2) {
            // If role.ADMIN is defined it means the user is an admin. And if tabnumber is less than 2 then the user is on an unrestricted tab.
            // User is on an allowed page
          } else {
            // Switch to an allowed page
            tabNumber = 0;
          }
        });
    });
  };
  getRole();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {tabNumber === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `scrollable-force-tab-${index}`,
//     "aria-controls": `scrollable-force-tabpanel-${index}`,
//   };
// }

// Styles
const useStyles = makeStyles((theme) => ({
  tabs: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
      marginTop: "0.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  bar: {
    padding: 0,
  },
  tabIcon: {
    position: "relative",
    top: "0.4rem",
  },
  tabText: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  },
  indicator: {
    height: "3px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.up("sm")]: {
      height: "4.5px",
      width: "20px",
      margin: "auto",
    },
  },
  // styles for competeheader
  toolbar: {
    minHeight: "auto",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    paddingRight: "0.5rem",
    marginTop: "0.25rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: "0.25rem",
  },
}));
// Main Component - Tabs for Compete Page
function CompeteTabs(props, { authUser }) {
  let { match, history } = props;
  let { params } = match;
  let { page } = params;
  const classes = useStyles();

  const tabNameToIndex = {
    0: "leaderboard",
    1: "challenges",
    2: "admin",
  };

  const indexToTabName = {
    leaderboard: 0,
    challenges: 1,
    admin: 2,
  };

  const [tabNumber, setTabNumber] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    setTabNumber(newValue);
    history.push(`/compete/${tabNameToIndex[newValue]}`);
  };
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          {/* Header */}
          <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
              <SusLogo1 className={classes.logo} />
              <Typography variant="h6" className={classes.title} noWrap>
                Compete
              </Typography>
            </Toolbar>
            {/* Tabs directly underneath header */}
            <Tabs
              value={tabNumber}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="off"
              aria-label="scrollable tabs"
              className={classes.tabs}
              TabIndicatorProps={{ className: classes.indicator }}
            >
              <Tab
                label={
                  <div className={classes.tabText}>
                    <EqualizerIcon className={classes.tabIcon} /> Leaderboard{" "}
                  </div>
                }
                // {...a11yProps(0)}
              />

              <Tab
                label={
                  <div className={classes.tabText}>
                    <StarIcon className={classes.tabIcon} /> Challenges{" "}
                  </div>
                }
                // {...a11yProps(1)}
              />
              {/* Admin Tab */}
              {!!authUser.roles[ROLES.ADMIN] && (
                <Tab
                  label={
                    <div className={classes.tabText}>
                      {/* All the extra spaces are around admin to make it appear as a longer word so that the spacing matches "challenges" and "leaderboard" */}
                      <SupervisorAccountIcon className={classes.tabIcon} />{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;Admin&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    </div>
                  }
                  // {...a11yProps(1)}
                />
              )}
            </Tabs>
          </AppBar>

          {/* LeaderBoard Tab */}
          <Suspense
            fallback={
              <div className="base-container">
                <ProgressCircle />
              </div>
            }
          >
            <TabPanel value={tabNumber} index={0} className="tab-container">
              <Leaderboard />
            </TabPanel>
          </Suspense>

          {/* Challeneges Tab - in progress */}
          <Suspense
            fallback={
              <div className="base-container">
                <ProgressCircle />
              </div>
            }
          >
            <TabPanel value={tabNumber} index={1} className="tab-container">
              <ComingSoon />
            </TabPanel>
          </Suspense>

          {/* ADMIN TAB - only displays for admin roles */}
          <Suspense
            fallback={
              <div className="base-container">
                <ProgressCircle />
              </div>
            }
          >
            {!!authUser.roles[ROLES.ADMIN] && (
              <TabPanel value={tabNumber} index={2} className="tab-container">
                <AdminPage />
              </TabPanel>
            )}
          </Suspense>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

export default withRouter(CompeteTabs);
