import React, { Fragment, useState, useContext } from "react";
import styles from "./modal.module.css";
import useIsIOS from "../../components/IosModal/useIsIOS";
import { IosModal } from "../../components/IosModal";

import CountUp from "react-countup";
import Modal from "react-modal";
import Confetti from "react-confetti";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import {
  getUser,
  createUser,
  uploadUserTotalPoint,
  updateUserPoint,
  updateDormPoint,
} from "../../services/Firebase";

import PropTypes from "prop-types";

import "./toastify.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ActionData from "./actionData.json";

import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EcoIcon from "@material-ui/icons/Eco";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Collapse from "@material-ui/core/Collapse";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import favorite from "../../img/favorite.svg";
import clsx from "clsx";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import TotalPointsCard from "../AccountPage/AccountTabs/points";

// Initiaize user's points in local storage. If the user has never logged points on this device,
// each local storage item will be null. To prevent "null" from displaying anywhere, we
// initialize here.
var total;
function initPoints(email) {
  total = 0;
  for (const key in ActionData) {
    var action = localStorage.getItem(ActionData[key].susAction); // Action to initialize
    if (isNaN(action) || action == null) {
      // If it hasn't been initialized
      localStorage.setItem(ActionData[key].susAction, 0); // Initialize to 0
    }
  }
  // TODO: Right now total init sets total equal to 0. I think we should be incrementing total inside the for loop? -Katie
  // Actually I'm pretty sure this gets overwritten by assignData later, as soon as assignData is called.
  localStorage.setItem("total", total); // After initializing individual points, initialize total.
}

// I think Linda wrote this function? I don't want to fail to do it justice with my comments. -Katie
// removed fav foreach loop here, don't think it was doing anything? (This comment is from Jessica?)
function assignData(data) {
  localStorage.setItem("total", data.total);
  const points = data.points;
  for (const [key, value] of Object.entries(points)) {
    localStorage.setItem(key, value);
  }
  localStorage.setItem("dorm", data.userDorm);
  localStorage.setItem("name", data.name);
}

Modal.setAppElement("#root"); // Need this for modal to not get error in console

// Amy or Kobe (I think) wrote this function. -Katie
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

// Idk who wrote this or what it does -Katie
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
  root: {
    minWidth: "280",
    backgroundColor: "var(--text-secondary)",
  },
  margin: {
    margin: theme.spacing.unit,
  },
  actionContainer: {
    paddingTop: "1rem",
    paddingLeft: "0rem",
    paddingRight: "0rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginBottom: "1rem",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "var(--theme)",
  },
  cardContent: {
    textAlign: "left",
    paddingBottom: "0",
  },
  cardActions: {
    paddingTop: "0",
  },
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    marginBottom: "1rem",
    maxWidth: "60rem",
    minHeight: "15rem",
    zIndex: 0,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
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
      height: "5px",
    },
  },
  search: {
    position: "absolute",
    top: "0.75rem",
    right: "1rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "12rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      top: "1rem",

    },
  },
  searchIcon: {
    color: "#fff",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fff",
    display: "flex",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

// Text to display on the homepage
function HomePage() {
  const [progressModalIsOpen, setProgressModalIsOpen] = useState(false);
  const [incrementModalIsOpen, setIncrementModalIsOpen] = useState(false);
  const authContext = useContext(AuthUserContext);
  // loading install prompt for ios
  const { prompt } = useIsIOS();

  // Get user's dorm set in local storage
  getUser(authContext.email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.exists) {
        assignData(docSnapshot.data());
        function assignData(data) {
          localStorage.setItem("dorm", data.userDorm);
        }
      } else {
        createUser(authContext.email);
        initPoints(authContext.email);
        uploadUserTotalPoint(authContext.email, total);
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  // A function to run when the button "another option..." within check your progress is clicked.
  // This won't be in the final code, but it's been part of my learning process for trying to get the
  // newlines to work, and I don't want to delete it until I fully solve this issue. Please ask me
  // before deleting this. :) -Katie
  const showProgress = () => {
    var codeBlock = "";
    for (const key in ActionData) {
      // Get each susAction
      // Add info about each susAction, formatted with html, to the codeBalck
      codeBlock +=
        ActionData[key].title.concat(
          " Points: ",
          localStorage.getItem(ActionData[key].susAction),
          " "
        ) + "<br />";
    }
    // Setting the html of the element with id "wrapper" to be the stuff that was just put in codeBlock.
    document.getElementById("wrapper").innerHTML = codeBlock;
  };

  // message to be displayed in check your progress
  var message = [];
  total = localStorage.getItem("total");

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expandedId, setExpandedId] = React.useState(-1);
  const [filter, setFilter] = useState("");
  toast.configure(); // Configure for toast messages later (not actually sure what this does tbh, but it was in
  // the one Amy wrote so I assume it's necessary here too) -Katie
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  // This function is the one that is called when the user presses the increment susAction button. If they confirm that
  // they meant to, then this fucntion calls increment.
  const confirmIncrement = (action) => {
    var confirmed = window.confirm("Are you sure you want to log this action?"); // Check with the user (did they mean to increment?)
    if( confirmed == true ) {
      increment(action); // If user meant to, call the function to actually increment user's points
    }
  };

  // Updates all necessary values in firestore and local storage when user completes sus action
  const increment = (action) => {
    // allows us to increment the correct values by writing the action & value to local storage
    // add specified number of points to the saved point total
    localStorage.setItem(
      action.susAction,
      parseInt(localStorage.getItem(action.susAction)) + parseInt(action.points)
    );

    // updates user's point in firestore
    updateUserPoint(
      authContext.email,
      action.susAction,
      parseInt(action.points)
    ).then(() => {
      window.location.reload(true);
    });

    // get the user's dorm from firestore and update the dorm's points
    getUser(authContext.email).onSnapshot(
      (docSnapshot) => {
        if (docSnapshot.exists) {
          assignData(docSnapshot.data());
        } else {
          createUser(authContext.email);
          initPoints(authContext.email);
          uploadUserTotalPoint(
            authContext.email,
            localStorage.getItem("total")
          );
        }
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );

    // update dorm's point in firestore
    updateDormPoint(localStorage.getItem("dorm"), parseInt(action.points));
  }; // increment

  // Initialize the color of each favorite button
  // This isn't in a const because I can't call the const when I want using html. Could go in a const and then be called with JS.
  var favIconColors = []; // Initalize array of the color for each favIcon
  for (const key in ActionData) {
    // Iterate over every action in ActionData
    var action = ActionData[key]; // Take the current action
    var storageName = action.susAction.concat("Fav");
    var storedFav = localStorage.getItem(storageName) == "true"; // We're getting a warning in the console (wants ===)
    if (storedFav) {
      // If the action is favorited
      favIconColors[key - 1] = "#DC143C"; // Turn red
    } else {
      favIconColors[key - 1] = "#6c6c6c"; // Otherwise turn gray
    }
  }

  const favAction = (action) => {
    // Get the name and info of the stored action that we're working with
    var storageName = action.susAction.concat("Fav");
    // storedFav is a boolean (is the current action favorited?)
    // NOTE: the item in storage is a string, so the following line forces it to evaluate as a boolean
    var storedFav = localStorage.getItem(storageName) == "true"; // We're getting a warning in the console
    // that this wants '===,' but I'm pretty sure we don't want that. I can check this again in a week or so. -Katie
    // In case the action hasn't been favorited before
    // NOTE: false is NaN, so here I don't check if the boolean is NaN because it often is. (I wonder if true is NaN too?)
    if (storedFav == null) {
      storedFav = false; // If not initialized, initialize here
    }
    storedFav = !storedFav; // Toggle the favorite
    // variable for getting color of fav icon
    var favIconColor = document.getElementById(
      "favoriteIcon".concat(action.susAction)
    );
    // Notify user that action was added/removed from favorites
    var displayText;
    if (storedFav) {
      displayText = action.title.concat(" added to favorites");
      favIconColor.style.color = "#DC143C"; // Turn red
      toast.success(displayText, { autoClose: 5000 }); // It's "success" so that the window is green
    } else {
      displayText = action.title.concat(" removed from favorites");
      favIconColor.style.color = "#6c6c6c"; // Back to grey
      toast.warn(displayText, { autoClose: 5000 }); // It's a warning so that the window is yellow
    }
    localStorage.setItem(storageName, storedFav); // Save the updated favorite value
  };

  // Set the "progress message" to be displayed when the user pressed "check progress"
  var progressMessage = '';
  const setProgressMessage = () => {
    for (const key in ActionData) { // Loop over every action in ActionData
      var actionPoints = localStorage.getItem(ActionData[key].susAction); // Points earned by current action
      progressMessage = (
        <>
          {progressMessage}
          {ActionData[key].title}&nbsp;points: {actionPoints}
          <br/>
        </>
      )
    }
    // Append the total points earned
    progressMessage = (
      <>
        {progressMessage}
        <h3>Total points: {total}</h3>
      </>
    )
  } // setProgressMessage

  // Call the function immediately so that it runs before the return statement
  setProgressMessage();

  // HTML to be displayed
  return (
    <>
      {prompt && <IosModal />}
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
                  <EcoIcon className={classes.tabIcon} /> Actions{" "}
                </div>
              }
              {...a11yProps(0)}
              style={{ backgroundColor: "transparent" }}
            />
            <Tab
              label={
                <div className={classes.tabText}>
                  <FavoriteIcon className={classes.tabIcon} /> Favorites{" "}
                </div>
              }
              {...a11yProps(1)}
              style={{ backgroundColor: "transparent" }}
            />
          </Tabs>
        </AppBar>
        <div className="top-container">
          <h3>
            You have earned&nbsp;
            {<CountUp start={0} end={total} duration={1}></CountUp>} points!
          </h3>
          <button
            onClick={() => setProgressModalIsOpen(true)}
            className="button"
          >
            Check Progress
          </button>
          <Modal
            isOpen={progressModalIsOpen}
            onRequestClose={() => setProgressModalIsOpen(false)}
            className={styles.modal}
            overlayClassName={styles.overlay}
          >
            <center>
              <Confetti
                width={1500}
                numberOfPieces={2000}
                recycle={false}
                opacity={0.7}
                // colors={["grey", "white", "green", "black"]}
              />
              <h1>Your Progress:</h1>
              {progressMessage}
              <div>
                <button
                  onClick={() => setProgressModalIsOpen(false)}
                  className="button"
                >
                  Close
                </button>
              </div>
            </center>
          </Modal>
        </div>
        <TabPanel value={value} index={0} class="tab-container">
          <Fragment>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={handleSearchChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Grid container spacing={2} className={classes.actionContainer}>
              {/* All actions (this loops using search) */}
              {ActionData.map(
                (action, i) =>
                  action.title.toLowerCase().includes(filter.toLowerCase()) && (
                    <Grid item xs={12} md={6} lg={4}>
                      <Card className={classes.root} key={action.title}>
                        <CardHeader
                          className={classes.cardContent}
                          action={
                            <IconButton
                              onClick={() => confirmIncrement(action)} // Call function to check if user meant to increment susAction
                              // Finally found how to get rid of random old green from click and hover!
                              // TODO: Is the following line actually still necessary? I commented it out and I think it's fine
                              // style={{ backgroundColor: "transparent" }}
                              aria-label="settings"
                              title="Complete this sustainable action"
                            >
                              <AddCircleIcon fontSize="large" />
                            </IconButton>
                          }
                          title={action.title}
                          subheader={"Earn ".concat(action.points, " Points!")}
                        />
                        <CardActions disableSpacing>
                          <IconButton
                            title="Add to favorites"
                            aria-label="add to favorites"
                            style={{
                              color: favIconColors[i - 1],
                              backgroundColor: "transparent",
                            }} // Set the favIcon color (i-1 prevents off-by-one error)
                            onClick={() => favAction(action)}
                            id={"favoriteIcon".concat(action.susAction)}
                            className={classes.favoriteIcon}
                          >
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: !expandedId,
                            })}
                            onClick={() => handleExpandClick(i)}
                            style={{ backgroundColor: "transparent" }}
                            aria-expanded={expandedId === i}
                            aria-label="Show More"
                            title="Learn more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse
                          in={expandedId === i}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <CardMedia
                              className={classes.media}
                              image={action.image}
                              title={action.title}
                            />
                            <Typography variant="h5" gutterBottom>
                              Environmental Impact:
                            </Typography>
                            <Typography variant="body1">
                              {action.impact}
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Fragment>
        </TabPanel>
        <TabPanel value={value} index={1} class="tab-container">
          <div>
            <AuthUserContext.Consumer>
              {(authUser) => (
                <>
                  <NoSsr>
                    <GoogleFontLoader
                      fonts={[
                        { font: "Spartan", weights: [300] },
                        { font: "Montserrat", weights: [200, 400, 700] },
                      ]}
                    />
                  </NoSsr>
                  <Card className={classes.card}>
                    <CardMedia classes={mediaStyles} image={favorite} />
                    <Box py={3} px={2} className={classes.content}>
                      <Info useStyles={useGalaxyInfoStyles}>
                        <InfoSubtitle>Your faves are here </InfoSubtitle>
                        <InfoTitle>Add more!</InfoTitle>
                        <InfoCaption>
                          Go to actions tab and press the heart to add&nbsp;
                          <span role="img" aria-label="heart">
                            ❤️
                          </span>
                        </InfoCaption>
                      </Info>
                    </Box>
                  </Card>
                  <Grid
                    container
                    spacing={2}
                    className={classes.actionContainer}
                  >
                    {/* Favorite actions (this loops using favs) */}
                    {ActionData.map(
                      (action, i) =>
                        localStorage.getItem(action.susAction.concat("Fav")) ==
                          "true" && (
                          <Grid item xs={12} md={6} lg={4}>
                            <Card className={classes.root} key={action.title}>
                              <CardHeader
                                className={classes.cardContent}
                                action={
                                  <IconButton
                                    onClick={() =>
                                      confirmIncrement(action)
                                    }
                                    // Finally found how to get rid of random old green from click and hover!
                                    style={{ backgroundColor: "transparent" }}
                                    aria-label="settings"
                                    title="Complete this sustainable action"
                                  >
                                    <AddCircleIcon fontSize="large" />
                                  </IconButton>
                                }
                                title={action.title}
                                subheader={"Earn ".concat(
                                  action.points,
                                  " Points!"
                                )}
                              />
                              <CardActions disableSpacing>
                                <IconButton
                                  title="Add to favorites"
                                  aria-label="add to favorites"
                                  style={{
                                    color: favIconColors[i - 1],
                                    backgroundColor: "transparent",
                                  }} // Set the favIcon color (i-1 prevents off-by-one error)
                                  onClick={() => favAction(action)}
                                  id={"favoriteIcon".concat(action.susAction)}
                                  className={classes.favoriteIcon}
                                >
                                  <FavoriteIcon />
                                </IconButton>
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: !expandedId,
                                  })}
                                  onClick={() => handleExpandClick(i)}
                                  style={{ backgroundColor: "transparent" }}
                                  aria-expanded={expandedId === i}
                                  aria-label="Show More"
                                  title="Learn more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse
                                in={expandedId === i}
                                timeout="auto"
                                unmountOnExit
                              >
                                <CardContent>
                                  <CardMedia
                                    className={classes.media}
                                    image={action.image}
                                    title={action.title}
                                  />
                                  <Typography variant="h5" gutterBottom>
                                    Environmental Impact:
                                  </Typography>
                                  <Typography variant="body1">
                                    {action.impact}
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                        )
                    )}
                  </Grid>
                </>
              )}
            </AuthUserContext.Consumer>
          </div>
        </TabPanel>
      </div>
    </>
  ); // end of return statement
} // end of function

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
export { initPoints, assignData };
