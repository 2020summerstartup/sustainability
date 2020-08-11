import React from "react";
import { AuthUserContext } from "../../../services/Session";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { withTheme } from "../../../components/Theme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DeleteIcon from "@material-ui/icons/Delete";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

import SignOutButton from "../../../components/SignOut";

var globalMute = false;

// Styles for settings drawer
const useStyles = makeStyles((theme) => ({
  settingsIcon: {
    color: "white",
    padding: "0",
  },
  listItemIcon: {
    minWidth: "2.5rem",
  },
  listItemText: {
    marginRight: "1.5rem",
  },
  // Trash can at bottom of drawer
  deleteIcon: {
    minWidth: "2.5rem",
    color: theme.palette.error.main,
  },
  deleteAccount: {
    position: "fixed",
    bottom: "5px",
    color: theme.palette.error.main,
  },
}));

const MuteSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
// Main Component - Settings on top right corner of profile page
function SettingsDrawer(props) {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [mute, setMute] = React.useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (event) => {
    setMute(event.target.checked);
    globalMute = event.target.checked;
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          {/* User's greeting */}
          <ListItemText>
            <Typography variant="h5">Settings</Typography>
            <Typography variant="h6">
              Hi, {localStorage.getItem("name")}!
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        {/* User's email */}
        <ListItem>
          <ListItemIcon className={classes.listItemIcon}>
            <EmailIcon />
          </ListItemIcon>
          <AuthUserContext.Consumer>
            {(authUser) => (
              <ListItemText className={classes.listItemText}>
                {authUser.email}
              </ListItemText>
            )}
          </AuthUserContext.Consumer>
        </ListItem>
        {/* Password change */}
        <ListItem button component={Link} to={ROUTES.CHANGEPW}>
          <ListItemIcon className={classes.listItemIcon}>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change password
          </ListItemText>
        </ListItem>
        {/* Dorm change */}
        <ListItem button component={Link} to={ROUTES.CHANGEDORM}>
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change your dorm
          </ListItemText>
        </ListItem>
        {/* Dark Mode */}
        <ListItem
          button
          checked={darkMode}
          onClick={() => {
            setDarkMode(!darkMode);
            window.location.reload();
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            {darkMode ? (
              <Typography>Dark Mode</Typography>
            ) : (
              <Typography>Light Mode</Typography>
            )}
          </ListItemText>
        </ListItem>
        {/* Info Page */}
        <ListItem button component={Link} to={ROUTES.INFO}>
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            More Info
          </ListItemText>
        </ListItem>
        {/* Contact us form */}
        <ListItem button component={Link} to={ROUTES.CONTACT}>
          <ListItemIcon className={classes.listItemIcon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Contact Us
          </ListItemText>
        </ListItem>
        {/* Sign out button */}
        {/* Moving this for now because always get error when signing out */}
        <ListItem className={classes.listItemIcon}>
          <SignOutButton />
        </ListItem>
        
      {/* Account Deletion */}
        <ListItem
          button
          component={Link}
          to={ROUTES.DELETE_ACCOUNT}
          className={classes.deleteAccount}
        >
          <ListItemIcon className={classes.deleteIcon}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Delete your account
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText className={classes.listItemText}>
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Audio Off</Grid>
          <Grid item>
            <MuteSwitch checked={mute} onChange={handleChange} name="mute" />
          </Grid>
          <Grid item>Audio On</Grid>
        </Grid>
      </Typography>
        </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div align="left">
      <React.Fragment key={"right"}>
        <IconButton
        // these 3 lines get rid of ripple effect!
          disableFocusRipple
          disableRipple
          style={{ backgroundColor: "transparent" }}
          className={classes.settingsIcon}
          onClick={toggleDrawer("right", true)}
        >
          {<SettingsIcon />}
        </IconButton>

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

export default withTheme(SettingsDrawer);
export const audioContext = React.createContext(globalMute);
// export default SettingsDrawer;export default withTheme(SettingsDrawer);
// export default SettingsDrawer;
