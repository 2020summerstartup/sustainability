import React from 'react';
import ActionCard from '../ActionCard';
import FaveCard from "../Favorites";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EcoIcon from '@material-ui/icons/Eco';

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
    root: {
    //   padding: "30px",
      flexGrow: 1,
      width: "100%",
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: "red",
    },
    // flexContainer: {
    //     padding: "10%",
    // }
  }));
  

function HomeTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
<div >
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
                    label="Actions!"
                    icon= {<EcoIcon />}
                    {...a11yProps(0)}
                    style={{ backgroundColor: "transparent" }}
                  />
                  <Tab
                    label="Your Favorites"
                    icon={<FavoriteIcon />}
                    {...a11yProps(1)}
                    style={{ backgroundColor: "transparent" }}
                  />
                
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <ActionCard />
              </TabPanel >
              <TabPanel value={value} index={1}>
                <FaveCard />
            </TabPanel>   
            </div>
    );
};    

export default HomeTabs;