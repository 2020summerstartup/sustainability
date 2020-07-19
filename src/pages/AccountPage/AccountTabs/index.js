import React from "react";
import TotalPointsCard from "./points";
import DormCard from "./dorm";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

// import leaderBoardUpdate, {
//   assignRanking,
// } from "../CompetePage/leaderBoardUpdate.js";
// import { getUser, getDorm } from "../../services/Firebase";
// // import SignOutButton from "../SignOut";
// import { AuthUserContext, withAuthorization } from "../../services/Session";

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
          <Typography>{children}</Typography>
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
    boxShadow: "2px 2px 6px #a6a6a6",
  },
  tabs: {
    flexGrow: 1,
    backgroundColor: "primary",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
      marginTop: "0.5rem",
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

function AccountTabs() {
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
          textColor="default"
          aria-label="scrollable tabs"
          centered="true"
          className={classes.tabs}
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab
            label={
              <div className={classes.tabText}>
                <PersonIcon className={classes.tabIcon} /> Your Points{" "}
              </div>
            }
            {...a11yProps(0)}
            style={{ backgroundColor: "transparent" }}
          />

          <Tab
            label={
              <div className={classes.tabText}>
                <HomeIcon className={classes.tabIcon} /> Your Dorm{" "}
              </div>
            }
            {...a11yProps(1)}
            style={{ backgroundColor: "transparent" }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} class="tab-container">
        <TotalPointsCard />
      </TabPanel>

      <TabPanel value={value} index={1} class="tab-container">
        <DormCard />
      </TabPanel>
    </div>
  );
}

export default AccountTabs;
