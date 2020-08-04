import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router";
import TotalPointsCard from "./points";
import ProgressCircle from "../../../components/ProgressCircle";
// import DormCard from "./dorm";
// import Badges from "./badges";
import Badges2 from "./badges2";
// import Badges3 m "./badges3";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import NewReleasesIcon from "@material-ui/icons/NewReleases"
import ActionData from "../../HomePage/actionData.json"

// probably delete later
// import Grid from "@material-ui/core/Grid";

//React lazy
// const TotalPointsCard = lazy(() => import("./points"));
const DormCard = lazy(() => import("./dorm"));
// const Badges = lazy(() => import("./badges"));
// const Badges2 = lazy(() => import("./badges2"));
// const Badges3 = lazy(() => import("./badges3"));

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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "2px 2px 6px #242424",
  },
  tabs: {
    backgroundColor: "primary",
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
    [theme.breakpoints.up("sm")]: {
      height: "4.5px",
      width: "20px",
      margin: "auto",
    },
  },
}));

const AccountTabs = props => {
  let { match, history } = props;
  let { params } = match;
  let { page } = params;
  const classes = useStyles();

  const tabNameToIndex = {
    0: "points",
    1: "dorm",
    2: "badge",
  };

  const indexToTabName = {
    points: 0,
    dorm: 1,
    badge: 2,
  };

  const [value, setValue] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/account/${tabNameToIndex[newValue]}`);
  };

  var temp = localStorage.getItem("firestoreMastered");
  var firestoreMastered = [];
  for (const el in ActionData) {
    var action = ActionData[el]; // Take the current action
    var stringActionName = JSON.stringify(action.susAction);
    if (temp.includes(stringActionName)) {
      firestoreMastered.push(action.susAction);
    }
  }

  return (
    <div>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appbar}
      >
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
            {...a11yProps(0)}
          />

          <Tab
            label={
              <>
                <div className={classes.tabTextBigScreen}>
                  <HomeIcon className={classes.tabIcon} /> Your Dorm{" "}
                </div>
                <div className={classes.tabTextSmallScreen}>
                  <HomeIcon className={classes.tabIcon} /> Dorm{" "}
                </div>
              </>
            }
            {...a11yProps(1)}
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
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tab-container">
         <TotalPointsCard />
        {/* </Suspense> */}
      </TabPanel>

      <TabPanel value={value} index={1} className="tab-container">
        <Suspense fallback={<ProgressCircle />}>
          <DormCard />
        </Suspense>
      </TabPanel>

      <TabPanel value={value} index={2} className="tab-container">
        <Suspense fallback={<ProgressCircle />}>
          {/* THIRD BADGE */}
          {/* <h1> </h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Badges3 />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Badges3 />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Badges3 />
            </Grid>
          </Grid> */}
          {/* FIRST BADGE */}
          {/* <h1> </h1> */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Badges />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Badges />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Badges />
            </Grid>
          </Grid> */}
          {/* SECOND BADGE */}
          {/* <h1> </h1> */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}> */}
              <Badges2 earnedBadges={firestoreMastered}/>
            {/* </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Badges2 />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Badges2 />
            </Grid>
          </Grid> */}
        </Suspense>
      </TabPanel>
    </div>
  );
}

export default withRouter(AccountTabs);
