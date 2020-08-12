import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router";
// import College from "./college";
// import TotalPointsCard from "./points";
import ProgressCircle from "../../../components/ProgressCircle";
// import Badges from "./badges";
import DarkModeModal from "./darkModeModal";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ActionData from "../../HomePage/actionData.json";

// For Compete Header
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as SusLogo2 } from "../../../img/logo_skin2.svg";
import SettingsDrawer from "../Settings";

const College = lazy(() => import("./college"));
const TotalPointsCard = lazy(() => import("./points"));
const Badges = lazy(() => import("./badges"));

// Tabs functions from Material UI
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
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

// Styles for Tabs
const useStyles = makeStyles((theme) => ({
  tabs: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
      marginTop: "0.5rem",
    },
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  tabIcon: {
    position: "relative",
    top: "0.4rem",
  },
  tabTextBigScreen: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      fontSize: "17px",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  },
  tabTextSmallScreen: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  indicator: {
    height: "3px",
    // Color for underline
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.up("sm")]: {
      height: "4.5px",
      width: "20px",
      margin: "auto",
    },
  },
  // styles for accountheader
  toolbar: {
    minHeight: "50px",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    paddingRight: "0.5rem",
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
    display: "inline-flex",
    alignItems: "center",
    padding: "0",
    marginTop: "0.25rem",
  },
}));

// Main component of AccountTabs file
const AccountTabs = (props) => {
  let { match, history } = props;
  let { params } = match;
  let { page } = params;
  const classes = useStyles();

  const tabNameToIndex = {
    0: "points",
    1: "college",
    2: "badges",
  };

  const indexToTabName = {
    points: 0,
    college: 1,
    badges: 2,
  };

  const [value, setValue] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/profile/${tabNameToIndex[newValue]}`);
  };

  var temp = localStorage.getItem("firestoreMastered");
  var firestoreMastered = [];
  for (const el in ActionData) {
    var action = ActionData[el];
    var stringActionName = JSON.stringify(action.susAction);
    if (temp !== null && temp.includes(stringActionName)) {
      firestoreMastered.push(action.susAction);
    }
  }

  return (
    <div>
      {/* Appbar has both Header and Tabs to avoid line in between */}
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container style={{ height: "52px" }}>
            {/* Top left corner styling with logo */}
            <Grid item style={{ margin: "auto 0", padding: 0, height: "auto" }}>
              <Typography variant="h6" className={classes.title} noWrap>
                <SusLogo2 className={classes.logo} />
                Profile
              </Typography>
            </Grid>
            {/* For settings access on top right corner */}
            <Grid item style={{ margin: "auto 0", padding: 0, height: "auto" }}>
              <SettingsDrawer />
            </Grid>
          </Grid>
        </Toolbar>
        {/* Modal with info for Dark Mode is displayed the first time user signs up */}
        <DarkModeModal />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          aria-label="scrollable tabs"
          className={classes.tabs}
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab
            label={
              <>
                <div className={classes.tabTextBigScreen}>
                  <PersonIcon className={classes.tabIcon} /> Your Points{" "}
                </div>
                <div className={classes.tabTextSmallScreen}>
                  <PersonIcon className={classes.tabIcon} /> Points{" "}
                </div>
              </>
            }
            // {...a11yProps(0)}
          />

          <Tab
            label={
              <>
                <div className={classes.tabTextBigScreen}>
                  <HomeIcon className={classes.tabIcon} /> Your College{" "}
                </div>
                <div className={classes.tabTextSmallScreen}>
                  <HomeIcon className={classes.tabIcon} /> Mudd{" "}
                </div>
              </>
            }
            // {...a11yProps(1)}
          />

          <Tab
            label={
              <>
                <div className={classes.tabTextBigScreen}>
                  <NewReleasesIcon className={classes.tabIcon} /> Your Badges{" "}
                </div>
                <div className={classes.tabTextSmallScreen}>
                  <NewReleasesIcon className={classes.tabIcon} /> Badges{" "}
                </div>
              </>
            }
            // {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      {/* Points Page */}
      <Suspense fallback={<ProgressCircle />}>
        <TabPanel value={value} index={0} className="tab-container">
          <TotalPointsCard />
        </TabPanel>
      </Suspense>
      {/* Mudd/College Page */}
      <Suspense fallback={<ProgressCircle />}>
        <TabPanel value={value} index={1} className="tab-container">
          <College />
        </TabPanel>
      </Suspense>
      {/* Badge Page */}
      <Suspense fallback={<ProgressCircle />}>
        <TabPanel value={value} index={2} className="tab-container">
          <Badges earnedBadges={firestoreMastered} />
        </TabPanel>
      </Suspense>
    </div>
  );
};

export default withRouter(AccountTabs);
