import React from "react";
import TotalPointsCard from "./points";
import DormCard from "./dorm";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import EcoIcon from "@material-ui/icons/Eco";
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';

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
  tabs: {
    flexGrow: 1,
    backgroundColor: "primary",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
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
      <AppBar position="static" color="primary">
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons="off"
            indicatorColor="primary"
            textColor="default"
            aria-label="scrollable tabs"
            centered="true"
            width="100%"
        >
            <Tab
            label="Your Points"
            icon={<PersonPinIcon />}
            {...a11yProps(0)}
            style={{ backgroundColor: "transparent" }}
            />

            <Tab
            label="Your Dorm"
            icon={<HomeIcon />}
            {...a11yProps(1)}
            style={{ backgroundColor: "transparent" }}
            />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <TotalPointsCard />
        </TabPanel>

        <TabPanel value={value} index={1}>
        <DormCard />
        </TabPanel>
    </div>
  );
}

export default AccountTabs;
