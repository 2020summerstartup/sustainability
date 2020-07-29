import React, { lazy, Suspense } from "react";
// import Challenges from "./challenges.js";
import Leaderboard from "./leaderboard";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarIcon from "@material-ui/icons/Star";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// React lazy
const Challenges = lazy(() => import("./challenges.js"));
// const Leaderboard = lazy(() => import("./leaderboard"));

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
    // flexGrow: 1,
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
  tabText: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
      fontWeight: "bold",
      marginBottom: "1rem",
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

function CompeteTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          // now it is grayed out when not selected
          // textColor="default"
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
            {...a11yProps(0)}
          />

          <Tab
            label={
              <div className={classes.tabText}>
                <StarIcon className={classes.tabIcon} /> Challenges{" "}
              </div>
            }
            {...a11yProps(1)}
            style={{ backgroundColor: "transparent" }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tab-container">
        <Leaderboard />
      </TabPanel>

      <TabPanel value={value} index={1} className="tab-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Challenges />
        </Suspense>
      </TabPanel>
    </div>
  );
}

export default CompeteTabs;
