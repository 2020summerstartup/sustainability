import React from "react";
import { AuthUserContext } from "../../../services/Session";

import { makeStyles } from "@material-ui/core/styles";
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
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DeleteIcon from "@material-ui/icons/Delete";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  settingsIcon: {
    color: "white",
    paddingRight: "0",
  },
  listItemIcon: {
    minWidth: "2.5rem",
  },
  listItemText: {
    marginRight: "1.5rem",
  },
  deleteIcon: {
    minWidth: "2.5rem",
    color: theme.palette.error.dark,
  },
  deleteAccount: {
    position: "fixed",
    bottom: "5px",
    color: theme.palette.error.dark,
  },
}));

function SettingsDrawer(props) {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h5">Settings</Typography>
            <Typography variant="h6">
              Hi, {localStorage.getItem("name")}!
            </Typography>
          </ListItemText>
        </ListItem>
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
        <ListItem button component={Link} to={ROUTES.CHANGEPW}>
          <ListItemIcon className={classes.listItemIcon}>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change password
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to={ROUTES.CHANGEDORM}>
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change your dorm
          </ListItemText>
        </ListItem>

        <ListItem
          button
          checked={darkMode}
          // onChange={() => window.location.reload()}
          onClick={() => {
            setDarkMode(!darkMode);
            window.location.reload();
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            {/* <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              onClick={() => window.location.reload()}
              color="primary"
              name="mode"
              inputProps={{ "aria-label": "mode changed" }}
            /> */}
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            {darkMode ? (
              <Typography>Dark Mode</Typography>
            ) : (
              <Typography>Light Mode</Typography>
            )}
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to={ROUTES.INFO}>
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            More Info
          </ListItemText>
        </ListItem>

        <ListItem button component={Link} to={ROUTES.CONTACT}>
          <ListItemIcon className={classes.listItemIcon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Contact Us
          </ListItemText>
        </ListItem>

        {/* Moving this for now because always get error when signing out */}
        {/* <ListItem className={classes.settingsSignOut}>
          <SignOutButton />
        </ListItem> */}

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
// export default SettingsDrawer;
