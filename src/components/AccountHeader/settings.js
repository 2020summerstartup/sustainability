import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChangePW from "../PasswordChange/changePw.js";
import Dropdown2 from "../Dropdown";
import styles from "../AccountHeader.modules.css";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom";
import FormDialog from "./popupform";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import PasswordChange from '../PasswordChange';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 100,
  },
  settingsIcon: {
    color: "white",
    display: "flex",
    position: "fixed",
    top: ".75rem",  
    right: "0rem",
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    //   className={clsx(classes.list, {
    //     [classes.fullList]: 
    //     anchor === 'top' || anchor === 'bottom',
    //   })} 
    class="settings"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {/* <ListItem button component={Link} to={ROUTES.HOME} className="link-text">
        <ListItemText primary="Google" />
   </ListItem> */}
   <ListItem>
     <ListItemText>Settings</ListItemText>
   </ListItem>
   <ListItem >
     <ListItemIcon>
       <EmailIcon/>
     </ListItemIcon>
       <ListItemText>
         {localStorage.getItem("email")}
         {/* <FormDialog/> */}
       </ListItemText>
   </ListItem>
   <ListItem button component={Link} to={ROUTES.CHANGEPW} className="link-text">
       <ListItemIcon>
            <LockOpenIcon />
       </ListItemIcon>
       <ListItemText>
           Change password
       </ListItemText>
   </ListItem>
   

   <ListItem button component={Link} to={ROUTES.CHANGEDORM} className="link-text">
   <ListItemIcon>
        <HomeIcon/>
     </ListItemIcon>
     <ListItemText >
       Change your dorm
     </ListItemText>
     </ListItem>

    <ListItem >
   <ListItemText>
     <SignOutButton/>
   </ListItemText>
    </ListItem>
    
     
   
      </List>
      
      
    </div>
  );

  return (
    <div align="left">
       
        <React.Fragment key={"right"}>
          
          <Button className={classes.settingsIcon} style={{ backgroundColor: "transparent" }} onClick={toggleDrawer("right", true)}>{<SettingsIcon/>}</Button>
         
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
