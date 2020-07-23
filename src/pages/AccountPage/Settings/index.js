import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import SignOutButton from "../../../components/SignOut";
import * as ROUTES from "../../../constants/routes";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";

import { AuthUserContext } from "../../../services/Session";
const useStyles = makeStyles((theme) => ({
  settingsIcon: {
    color: "white",
    paddingRight: "0",
  },
  listItem: {
    marginLeft: "0",
    paddingLeft: "0",
  },
  listItemIcon: {
    minWidth: "2.5rem",
  },
  deleteIcon: {
    minWidth: "2.5rem",
    color: "red",
  },
  listItemText: {
    marginRight: "1.5rem",
  },
  deleteAccount: {
    position: "fixed",
    bottom: "1rem",
    color: "red",
  },
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
      class="settings"
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

        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Switch
              checked={state.checked}
              // write this function later when we implement dark mode
              // onChange={handleChange}
              color="primary"
              name="mode"
              inputProps={{ "aria-label": "mode changed" }}
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change your theme
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
          className={classes.settingsIcon}
          style={{ backgroundColor: "transparent" }}
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
