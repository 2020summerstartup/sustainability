import React, { Suspense } from "react";
import { withRouter } from "react-router";
// admin stuff
import { AuthUserContext } from "../../../services/Session";
import * as ROLES from '../../../constants/roles';
import AdminPage from "../../AdminPage";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

// import Challenges from "./challenges.js";
import Leaderboard from "./leaderboard";
import ProgressCircle from "../../../components/ProgressCircle";
// import ChallengeCard2 from "./challengeCard2";
import ComingSoon from "./comingSoon";
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

// Functions from Material UI for tabs
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
function CompeteTabs(props, {authUser}) {
  let { match, history } = props;
  let { params } = match;
  let { page } = params;
  const classes = useStyles();

  const tabNameToIndex = {
    0: "leaderboard",
    1: "challenges",
  };

  const indexToTabName = {
    leaderboard: 0,
    challenges: 1,
  };

  const [value, setValue] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        {/* Admin Tab */}
        {!!authUser.roles[ROLES.ADMIN] && (
           <Tab
           label={
             <div className={classes.tabText}>
               <SupervisorAccountIcon className={classes.tabIcon} /> Admin{" "}
             </div>
           }
           {...a11yProps(1)}
           style={{ backgroundColor: "transparent" }}
         />
        )}
        </Tabs>
      </AppBar>
      {/* LeaderBoard Tab */}
      <TabPanel value={value} index={0} className="tab-container">
        <Leaderboard />
      </TabPanel>
      {/* Challeneges Tab - in progress */}
      <TabPanel value={value} index={1} className="tab-container">
        <Suspense fallback={<ProgressCircle />}>
          <ComingSoon/>
        </Suspense>
      </TabPanel>

      {/* ADMIN TAB */}
      {!!authUser.roles[ROLES.ADMIN] && (
          <TabPanel value={value} index={2} className="tab-container">
          <Suspense fallback={<ProgressCircle />}>
          <AdminPage/>
          </Suspense>
       </TabPanel>
        )}
      
    </div>
    )}
    </AuthUserContext.Consumer>


  );
}

export default withRouter(CompeteTabs);
