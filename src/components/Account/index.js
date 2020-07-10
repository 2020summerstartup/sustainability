import React from "react";
// import "./index.css";
// import "././index.css";
// import { Link } from "react-router-dom";
// import southdorm from "./southdorm.jpg";
// import ActionCard from 
// import * as ROUTES from "../../constants/routes";
// import Tabs from '@material-ui/core/Tabs';

import SignOutButton from "../SignOut";
// import { db } from "..,Firebase/firebase.js";
// import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

import Dropdown2 from "../Dropdown";
import accountImg from "../../img/account.svg";
import TotalPoints from "./points.js";
import DormCard from './dorm.js';
import FaveCard from './fave.js';
import SettingsPage from '../Setting';


// import SignOutButton from "../SignOut";
import { AuthUserContext, withAuthorization } from "../Session";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HouseIcon from '@material-ui/icons/House';
import SettingsIcon from '@material-ui/icons/Settings';

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
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

// export function getPoints() {
// db.collection("users").document(FirebaseAuth.getInstance().getCurrentUser().getUid())
//         .get().addOnCompleteListener(task -> {
//     if(task.isSuccessful() && task.getResult() != null){
//         String points = task.getResult().getNumber("points);
       
//         //other stuff
//     }else{
//         //deal with error
//     }
//     return points;
// })
// };

function AccountPage() {
   
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div class="base-container">
            <div class="profile">
              Profile

  
            </div>
            <div class="accountName">
            {authUser.email}'s page! 
            </div>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="scrollable force tabs example"
                  
                >
                  <Tab label="Your Points" icon={<PersonPinIcon/>} {...a11yProps(0)} />
                  <Tab label="Your Favorites" icon={<FavoriteIcon />} {...a11yProps(1)} />
                  <Tab label="Your Dorm" icon={<HouseIcon />} {...a11yProps(2)} />
                  <Tab label="Settings" icon={<SettingsIcon />} {...a11yProps(3)} />
                  <Tab label= <SignOutButton /> {...a11yProps(4)} />
                  
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
              <TotalPoints />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FaveCard />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <DormCard />
              
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SettingsPage />



              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              
          
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    </div>
    );
  }



      
        // <div class="base-container">

        //   <div class="wrapper1">
        //     Welcome,{authUser.email}! 
            {/* *insert profile pic* */}
          // </div> 
          // <div class="wrapper2">
          //   <div>   
          //     <div>
          //     You've earned 
          //     </div>  
          //     <div>
          //     { localStorage.getItem("waterBottle") } Points for recycling,
          //     </div> 
          //     <div>
          //     way to go!</div>    
              
          //   </div>
          //   <div>
          //   You're representing ______ {authUser.dorm} dorm
            
          //   </div>

          //   <div>
          //     Your dorm is in ____ place!
          //   </div>
          //   <div>
          //   <img alt = '' src = {southdorm} />
          //   </div>
          //   <div class="wrapper3">
          //   <div>
          //     Account info:
          //   </div>
          //   <div>
          //     Email address: {authUser.email}
          //   </div>
          //   <div>
          //     Need to change dorms or change your password?
          //   </div>

          //   <div>
          //   <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
          //   </div>
          // </div>
          {/* <div class="wrapper3">
            <div>
              Account info:
            </div>
            <div>
              Email address: *insert user email*
            </div>
            <div>
              Need to change dorms or change your password?
            </div>

            <div>
            <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
            </div> */}
        
              




            
          // </div>
        /* <div className="grid"> </div>
          <div>ACCOUNT INFO</div>
          <h1>Your Account: {authUser.email}</h1>
          
          <h3>You've earned *insert user's points*{authUser.points}, way to go!</h3>
          <h3>Your dorm is in *user dorm place*{authUser.dormplace} place with *user dorm points* {authUser.dormPoints}points!</h3>
          <h3>You're representing *insert dorm* {authUser.dorm} dorm</h3>
          <h3>*insert dorm pic*</h3>
          <img src = {southdorm} />

          Entered the wrong dorm? Change your account password?
          <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
          
          <SignOutButton className="signout-btn" />
         
          
          <div class = "wrapper">
            
          <div class="box">box1</div>
          <div class="box">box2</div>
          <div class="box">box3</div>
          <div class="box">box4</div>
           */
          // <div class="bottom">
          //   <SignOutButton />
          // </div>
          //  </div>
      // 
//     </AuthUserContext.Consumer>
//   </div>
// );

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
          