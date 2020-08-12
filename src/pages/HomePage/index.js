import React, { useState, useContext, lazy, Suspense } from "react";
import { withRouter } from "react-router";
import { retry } from "../../App/index";
import PropTypes from "prop-types";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import {
  updateUserPoint,
  updateDormPoint,
  addFav,
  deleteFav,
  actionMastered,
  updateUserImpact,
  updateSchoolImpact,
} from "../../services/Firebase";
import ActionData from "./actionData.json";
import ProgressCircle from "../../components/ProgressCircle";

// import outside libraries
import CountUp from "react-countup";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import svg & css files
import { ReactComponent as SusLogo3 } from "../../img/logo_skin3.svg";
import actionTab from "../../img/actionTab.svg";
import badgeImg from "../../img/badge.svg";
import styles from "./modal.module.css";
import "./toastify.css";

// import material ui
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

// Modal Imports
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import Collapse from "@material-ui/core/Collapse";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

import clsx from "clsx";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";

// Sounds
import like from "../../sounds/state-change_confirm-up.wav";
import unlike from "../../sounds/state-change_confirm-down.wav";
import confetti from "../../sounds/hero_decorative-celebration-02.wav";
import badge from "../../sounds/hero_simple-celebration-01.wav";
import increment from "../../sounds/navigation_selection-complete-celebration.wav";

// Lazy load the fave card
const FavoriteGalaxyCard = lazy(() => retry(() => import("./faveGalaxyCard.js")));
// Initiaize user's points in local storage. If the user has never logged points on this device,
// each local storage item will be null. To prevent "null" from displaying anywhere, we
// initialize here.
//DONT THINK WE NEED THIS ANYMORE?
var total;
function initPoints(email) {
  total = 0;
  for (const el in ActionData) {
    var action = localStorage.getItem(ActionData[el].susAction); // Action to initialize
    if (isNaN(action) || action == null) {
      // If it hasn't been initialized
      localStorage.setItem(ActionData[el].susAction, 0); // Initialize to 0
      action = 0;
    }
    total += parseInt(action); // Keep track of the sum of the individual points
  }
  localStorage.setItem("total", total); // After initializing individual points, initialize total.
}

// sound play for certain buttons
const likeAudio = new Audio(like);
const unlikeAudio = new Audio(unlike);
const confettiAudio = new Audio(confetti);
const incrementAudio = new Audio(increment);

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};



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

// function a11yProps(index) {
//   return {
//     id: `scrollable-force-tab-${index}`,
//     "aria-controls": `scrollable-force-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  // styles for HomeHeader
  toolbar: {
    minHeight: "auto",
  },
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    marginTop: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  title: {
    fontWeight: "bold",
    display: "inline",
    marginRight: "2rem",
    marginTop: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  // styles for tabs
  tabs: {
    backgroundColor: "primary",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
      marginTop: "0.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
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
      height: "5px",
    },
  },
  // styles for search bar
  search: {
    position: "absolute",
    top: "0.75rem",
    right: "1rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: 0,
    width: "12rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
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
  // styles for total points text
  totalPoints: {
    position: "relative",
    top: "0.5rem",
    fontWeight: "bold",
  },
  // styles for action tab galaxycard (fave galaxy card is lazy loaded from its own file)
  galaxyCard: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    marginBottom: "1rem",
    maxWidth: "36rem",
    minHeight: "15rem",
    zIndex: 0,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "75vh",
      minHeight: "40vh",
    },
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
  galaxyContent: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  // styles for actioncards
  actionCard: {
    minWidth: "280",
    backgroundColor: theme.palette.divider,
    display: "flex",
    flexDirection: "column",
  },
  actionContainer: {
    padding: "0",
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
  cardContent: {
    textAlign: "left",
    paddingBottom: "0",
  },
  cardActions: {
    display: "flex",
    flex: "1 0 auto",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  // floating action button (fab) on mobile screen
  fab: {
    backgroundColor: "secondary",
    right: "1rem",
    bottom: "4.5rem",
    position: "fixed",
    zIndex: "1",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // styles for checkprogress modal
  checkProgress: {
    backgroundColor: "secondary",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "secondary",
      display: "flex",
      marginTop: theme.spacing(2),
    },
  },
  dialogPaper: {
    overflow: "hidden !important",
    backgroundColor: "secondary",
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  badgeImg: {
    width: "50%",
    height: "50%",
    margin: "1rem",
  },
  dialogBody: {
    color: "black",
    fontWeight: "bold",
  },
  buttonClose: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  buttonBadge: {
    marginTop: theme.spacing(2),
  },
}));

// transition to make modal open by sliding up and close by sliding down
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HomePage(props) {
  const [progressModalIsOpen, setProgressModalIsOpen] = useState(false);
  const [badgeModalIsOpen, setBadgeModalIsOpen] = useState(false);
  const [badgeAction, setBadgeAction] = useState("");
  const [badgeActionCount, setBadgeActionCount] = useState("");
  const authContext = useContext(AuthUserContext);

  // nested routing
  let { match, history } = props;
  let { params } = match;
  let { page } = params;
  const tabNameToIndex = {
    0: "actions",
    1: "favorites",
  };

  const indexToTabName = {
    actions: 0,
    favorites: 1,
  };

  // this is needed to prevent error in console when user signs into their account
  var initUserTotal;
  if (localStorage.getItem("total") == null) {
    initUserTotal = 0;
  } else {
    initUserTotal = localStorage.getItem("total");
  }
  const [userTotal, updateUserTotal] = useState(initUserTotal);

  const classes = useStyles();
  const [value, setValue] = React.useState(indexToTabName[page]);
  const [expandedId, setExpandedId] = React.useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  toast.configure(); // Configure for toast messages later
  // const mediaStyles1 = useCoverCardMediaStyles({ bgPosition: "top"});
  const mediaStyles2 = useCoverCardMediaStyles({ bgPosition: "bottom" });

  // called when user clicks on different tabs
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    history.push(`/home/${tabNameToIndex[newValue]}`);
  };

  // called when user clicks on the expand button
  // tells which card to expand based on its index
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  // updates letter(s) that are search everytime the user types
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // called when mapping through action cards to see if there are filtered options
  const filteredOptions = ActionData.filter(
    (action) =>
      action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      !searchQuery
  );

  // (JM) this initalizes a global variable (firestore mastered) that will always remain up to date with firestore and LS
  // NOTE: use this because of the way we check to see if specific action buttons need to be disabled (can't use parse in jsx code)
  var tempMastered = localStorage.getItem("firestoreMastered");
  var firestoreMastered = []; // initalize the variable
  for (const el in ActionData) {
    var action = ActionData[el]; // Take the current action
    var stringActionName = JSON.stringify(action.susAction);
    if (tempMastered != null && tempMastered.includes(stringActionName)) { // if the action has been previously mastered (ie. is in firestore)
      firestoreMastered.push(action.susAction); //if the action is mastered, add it to the array 
    }
  }

  // This function is the one that is called when the user presses the increment susAction button. If they confirm that
  // they meant to, then this function calls increment.
  const confirmIncrement = (action) => {
    var confirmed = window.confirm("Are you sure you want to log this action?"); // Check with the user (did they mean to increment?)
    if (confirmed === true) {
      increment(action); // If user meant to, call the function to actually increment user's points
    }
  };

  // this function is called upon increment
  // sets the state of userTotal so that user's total point display is correct (bc can't do parse int in jsx code)
  const updateDisplayTotal = (actionPoint) => {
    const newTotal =
      parseInt(localStorage.getItem("total")) + parseInt(actionPoint);
    updateUserTotal(newTotal);
  };

  // (JM) Called when user clicks to increment an action --> updates necessary values in firestore and LS
  const increment = (action) => {
    // function is what updates UserTotal state so that correct score is displayed!!
    updateDisplayTotal(action.points);

    // updates user's doc in firestore & LS to reflect incremented action
    updateUserPoint(authContext.email, action.susAction, parseInt(action.points))

    // add's associated impact points to user & dorm data in firestore and local storage
    updateUserImpact(authContext.email, action.coEmiss, action.energy, action.water);

    // add's associated impact points to school in firestore and local storage
    updateSchoolImpact(action.coEmiss, action.energy, action.water);

    // check if action has been completed enough time to be considered "mastered"
    // also sends user a progress notification if action has not yet been mastered or modal if it has been mastered
    checkMastered(action);

    // update dorm's point in firestore (dorm point total not stored in LS so update here is not necessary)
    updateDormPoint(localStorage.getItem("dorm"), parseInt(action.points));
  }; // increment


  // (JM) called when user increments an action to check if the action has been mastered & reacts accordingly 
  // NOTE: called after LS point has been incremented (this way the value we are checking has the most recent action point)
  const checkMastered = (action) => {
    const actionTotal = localStorage.getItem(action.susAction); // gets the point value for the action & sets as actionTotal 
    if (action.toMaster * action.points > actionTotal) {
      // If action has not been mastered, the button will remain enabled
      // send user a progress alert to tell them how many more points they need to complete the action
      var displayText; // display a different message depending on if the user needs to buzz one or several more times to complete
      if (action.toMaster - actionTotal / action.points !== 1) {
        displayText = `You are ${
          (action.toMaster - actionTotal / action.points)
          } buzzes away from mastering the ${action.title} action!`; // if more than 1 buzz required to action make buzz plural
      } else {
        displayText = `You are only 1 buzz away from mastering the ${action.title} action! You got this!`; // if only one buzz left, singular buzz
      }
      toast(displayText, { autoClose: 5000 }); // It's "success" so that the toast is pink
      playSound(incrementAudio);
      setBadgeModalIsOpen(false); // make sure badge modal does not pop up bc action is not yet mastered
    } else if (action.toMaster * action.points <= actionTotal) {
      // If action has been mastered, the button will get disabled
      // send user a modal celebrating thier new mastered action
      actionMastered(authContext.email, action.susAction); // updates masteredAction array in firestore w/ new action included
      setBadgeAction(action.title); // to make sure modal has correct action name
      setBadgeActionCount(action.toMaster); // to make sure modal has correct value for times completed
      setBadgeModalIsOpen(true); // to have badge modal display 
      const badgeAudio = new Audio(badge);
      badgeAudio.play();
      firestoreMastered.push(action.susAction); // updates the firestoreMastered global variable --> changes button to disabled
      localStorage.setItem("firestoreMastered", JSON.stringify(firestoreMastered)); // updates array in LS w/ new action included
    }
  };

  // called when user clicks "got it" button to close the modal
  const handleClose = () => {
    setBadgeModalIsOpen(false);
  };

  // called when user clicks on "see my badge" button to go to badge tab in profile page
  const handleClickSeeBadge = () => {
    history.push(`/profile/badges`);
  }

  // Initialize the color of each favorite button
  // This isn't in a const because I can't call the const when I want using html. Could go in a const and then be called with JS.
  var favIconColors = []; // Initalize array of the color for each favIcon
  for (const i in ActionData) {
    // Iterate over every action in ActionData
    var action2 = ActionData[i]; // Take the current action
    var storageName2 = action2.susAction.concat("Fav");
    var storedFav = localStorage.getItem(storageName2) === "true";
    if (storedFav) {
      // If the action is favorited
      favIconColors[i - 1] = "var(--theme-secondary)"; // Turn red
    } else {
      favIconColors[i - 1] = "#6c6c6c"; // Otherwise turn gray
    }
  }

  // to flip the status of favorited action --> so that color changes
  const favAction = (action) => {
    // Get the name and info of the stored action that we're working with
    var storageName = action.susAction.concat("Fav");
    // storedFav is a boolean (is the current action favorited?)
    // NOTE: the item in storage is a string, so the following line forces it to evaluate as a boolean
    var storedFav = localStorage.getItem(storageName) === "true";
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
    const email = localStorage.getItem("email");
    if (storedFav) {
      // if the action is now favorited
      displayText = action.title.concat(" added to favorites"); // define text to display on toast
      favIconColor.style.color = "#f48fb1"; // Turn pink
      playSound(likeAudio);
      toast.success(displayText, { autoClose: 3000 });
      addFav(email, action.susAction); // add action to firestore array of fav actions 
    } else {
      // if the action is now unfavorited
      displayText = action.title.concat(" removed from favorites");
      favIconColor.style.color = "#6c6c6c"; // Back to grey
      playSound(unlikeAudio);
      toast.warn(displayText, { autoClose: 3000 }); // It's a warning so that the window is yellow
      deleteFav(email, action.susAction); // delete action to firestore array of fav actions
    }
    localStorage.setItem(storageName, storedFav); // set local storage actionFav to either true or false depending on new fav status

  };

  // Set the "progress message" to be displayed when the user pressed "check progress"
  var progressMessage = "";
  const setProgressMessage = () => {
    // initPoints has to be called here so that any values that aren't yet initialized are displayed as 0 instead
    // appearing as blank
    initPoints(); // DO NOT REMOVE
    for (const el in ActionData) {
      // Loop over every action in ActionData
      var actionPoints = localStorage.getItem(ActionData[el].susAction); // Points earned by current action
      progressMessage = (
        <>
          {progressMessage}
          {ActionData[el].title}&nbsp;points: {actionPoints}
          <br />
        </>
      );
    }
    // Append the total points earned
    progressMessage = (
      <>
        {progressMessage}
        <Typography
          variant="h6"
          component={"span"}
          className={classes.totalPoints}
        >
          <b>Total points: {userTotal}</b>
        </Typography>
      </>
    );
  }; // setProgressMessage

  // Call the function immediately so that it runs before the return statement
  setProgressMessage();

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <>
          {/* BOTH ACTIONS AND FAVORITES TABS DISPLAY SAME TOP PART- up to galaxy card */}
          {/* HOMEHEADER */}
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <SusLogo3 className={classes.logo} />
              <Typography className={classes.title} variant="h6">
                Home
              </Typography>
            </Toolbar>

            {/* HOMETABS */}
            <Tabs
              value={value}
              onChange={handleChangeTabs}
              variant="fullWidth"
              scrollButtons="off"
              aria-label="scrollable tabs"
              className={classes.tabs}
              TabIndicatorProps={{ className: classes.indicator }}
            >
              <Tab
                label={
                  <div className={classes.tabText}>
                    <EcoIcon className={classes.tabIcon} /> Actions{" "}
                  </div>
                }
                // {...a11yProps(0)}
              />
              <Tab
                label={
                  <div className={classes.tabText}>
                    <FavoriteIcon className={classes.tabIcon} /> Favorites{" "}
                  </div>
                }
                // {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>

          {/* top-container includes total points & check progress */}
          <div className="top-container">
            {/* TOTAL POINTS */}
            <Typography
              variant="h5"
              style={{ marginTop: "1rem" }}
              component={"span"}
            >
              You have earned&nbsp;
              {
                <CountUp
                  start={0}
                  end={parseInt(userTotal)}
                  duration={1}
                ></CountUp>
              }{" "}
              points!
            </Typography>

            {/* Mobile Screens- floating action button */}
            <Fab
              variant="extended"
              size="medium"
              color="secondary"
              onClick={() => setProgressModalIsOpen(true)}
              aria-label="check progress"
              className={classes.fab}
            >
              <CheckIcon />
              &nbsp;Progress
            </Fab>
            {/* Large Screens- regular button under total points*/}
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setProgressModalIsOpen(true);
                playSound(confettiAudio);
              }}
              className={classes.checkProgress}
            >
              Check Progress
            </Button>

            {/* BADGE MODAL- opens when user logs their last action to master the badge! */}
            <Dialog
              open={badgeModalIsOpen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {/* NOTE: dialogContent is styles in module.css, background wouldn't work otherwise */}
              <DialogContent className={styles.dialogContent}>
                {/* RIBBON */}
                <div className={styles.ribbonWrapper}>
                  <h1 className={styles.ribbon}>
                    <strong className={styles.ribbonContent}>
                      Congratulations {localStorage.getItem("name")}!
                    </strong>
                  </h1>
                </div>
                <img alt="badge" src={badgeImg} className={classes.badgeImg} />
                {/* MUST ATTRIBUTE AUTHOR */}
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                <Typography variant="body1" className={classes.dialogBody}>
                  You just earned a new badge for mastering the {badgeAction}{" "}
                  action! This means you have completed this action{" "}
                  {badgeActionCount} times. Great job, and keep being
                  sustainable!
                </Typography>
                {/* <div style={{ margin: "auto" }}> */}
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="primary"
                    className={classes.buttonClose}
                  >
                    Got it
                  </Button>
                  <Button
                    onClick={() => handleClickSeeBadge()}
                    variant="contained"
                    color="secondary"
                    className={classes.buttonBadge}
                  >
                    See my Badge
                  </Button>
                {/* </div> */}
              </DialogContent>
            </Dialog>

            {/* CHECK PROGRESS MODAL */}
            <Dialog
              open={progressModalIsOpen}
              onClose={() => setProgressModalIsOpen(false)}
              TransitionComponent={Transition}
              keepMounted
              fullWidth
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
              classes={{ paper: classes.dialogPaper }}
            >
              <DialogTitle
                style={{
                  backgroundColor: "var(--theme-secondary)",
                  color: "#FFFFFF",
                }}
              >
                <b>Check Your Progress!</b>
              </DialogTitle>
              <DialogContent>
                {/* react confetti */}
                <Confetti
                  width={1500}
                  numberOfPieces={2000}
                  recycle={false}
                  opacity={0.7}
                />
                <DialogContentText>{progressMessage}</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setProgressModalIsOpen(false);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          {/* ACTIONS TAB */}
          <TabPanel value={value} index={0} className="tab-container">
            {/* SEARCH BAR for ACTIONS */}
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

            {/* FONTS for ACTION GALAXY CARD */}
            <NoSsr>
              <GoogleFontLoader
                fonts={[
                  { font: "Spartan", weights: [300] },
                  { font: "Montserrat", weights: [200, 400, 700] },
                ]}
              />
            </NoSsr>
            {/* ACTION GALAXY CARD */}
            <Card className={classes.galaxyCard}>
              <CardMedia
                classes={mediaStyles2}
                image={actionTab}
                style={{ backgroundPosition: "center center" }}
              />
              <Box py={3} px={2} className={classes.galaxyContent}>
                <Info useStyles={useGalaxyInfoStyles}>
                  <InfoSubtitle
                    style={{ color: "white", fontWeight: "bold" }}
                  ></InfoSubtitle>
                  <InfoTitle>Log your actions here!</InfoTitle>
                  <InfoCaption style={{ color: "white", fontWeight: "bold" }}>
                    Tap the drop down menu to find out more
                    <span role="img" aria-label="down arrow">
                      🔽
                    </span>
                  </InfoCaption>
                </Info>
              </Box>
            </Card>

            {/* ACTION CARDS */}
            <Grid container justify="center" spacing={2}>
              {/* All actions (this loops using search- toLowerCase makes it non-case sensitive) */}
              {filteredOptions.length ? (
                ActionData.map(
                  (action, i) =>
                    action.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) && (
                      <Grid item xs={12} md={6} lg={4} key={i}>
                        <Card className={classes.actionCard}>
                          {/* Top part of the action card- title, points, add icon */}
                          <CardHeader
                            className={classes.cardContent}
                            action={
                              <IconButton
                                disabled={firestoreMastered.includes(
                                  action.susAction
                                )}
                                onClick={() => confirmIncrement(action)} // Call function to check if user meant to increment susAction
                                aria-label="increment"
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

                          {/* Bottom part of the action card- favorites icon & expand icon */}
                          <CardActions
                            disableSpacing
                            className={classes.cardActions}
                          >
                            <IconButton
                              title="Add to favorites"
                              aria-label="add to favorites"
                              style={{
                                color: favIconColors[i - 1],
                              }} // Set the favIcon color (i-1 prevents off-by-one error)
                              onClick={() => favAction(action)}
                              id={"favoriteIcon".concat(action.susAction)}
                              className={classes.favoriteIcon}
                            >
                              <FavoriteIcon />
                            </IconButton>
                            {/* cards expand one by one since we pass in the index parament */}
                            <IconButton
                              className={clsx(classes.expand, {
                                [classes.expandOpen]: !expandedId,
                              })}
                              onClick={() => {
                                handleExpandClick(i);
                              }}
                              aria-expanded={expandedId === i}
                              aria-label="Show More"
                              title="Learn more"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          </CardActions>

                          {/* Expanded part of the action card- #times to master action, image, & impact */}
                          <Collapse
                            in={expandedId === i}
                            timeout="auto"
                            unmountOnExit
                          >
                            <CardContent>
                              <Typography variant="h6" gutterBottom>
                                Complete this action {action.toMaster} times to
                                earn a badge!
                              </Typography>
                              <CardMedia
                                className={classes.media}
                                image={action.image}
                                title={action.title}
                              />
                              <Typography
                                variant="h5"
                                component={"span"}
                                gutterBottom
                              >
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
                )
              ) : (
                <>
                  {/* IF NO RESULTS FROM SEARCH */}
                  <Typography variant="h6" gutterBottom>
                    Sorry no actions found for "{searchQuery}"{" "}
                    <span role="img" aria-label="sad face">
                      😢
                    </span>
                  </Typography>
                    <Typography variant="body1">
                      Feel free to fill out the "contact us" form in settings if
                    you would like us to add "{searchQuery}" as a sustainable
                    action!
                  </Typography>
                  </>
                )}
            </Grid>
          </TabPanel>

          {/* FAVORITES TAB */}
          <TabPanel value={value} index={1} className="tab-container">
            <>
              {/* lazy loading favorites galaxy card */}
              <Suspense fallback={<ProgressCircle />}>
                <FavoriteGalaxyCard />
              </Suspense>

              {/* FAVORITE ACTIONS */}
              <Grid
                container
                justify="center"
                spacing={2}
                className={classes.actionContainer}
              >
                {/* Favorite actions (this loops using favs) */}
                {ActionData.map(
                  (action, i) =>
                    localStorage.getItem(action.susAction.concat("Fav")) ===
                      "true" && (
                      <Grid item xs={12} md={6} lg={4} key={i}>
                        {/* Top part of the action card- title, points, add icon */}
                        <Card className={classes.actionCard}>
                          <CardHeader
                            className={classes.cardContent}
                            action={
                              <IconButton
                                disabled={firestoreMastered.includes(
                                  action.susAction
                                )}
                                onClick={() => confirmIncrement(action)}
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

                          {/* Bottom part of the action card- favorites icon & expand icon */}
                          <CardActions disableSpacing>
                            <IconButton
                              title="Add to favorites"
                              aria-label="add to favorites"
                              style={{
                                color: "var(--theme-secondary)",
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
                              aria-expanded={expandedId === i}
                              aria-label="Show More"
                              title="Learn more"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          </CardActions>

                          {/* Expanded part of the action card- #times to master action, image, & impact */}
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
                              <Typography
                                variant="h5"
                                component={"span"}
                                gutterBottom
                              >
                                Environmental Impact:
                              </Typography>
                              <Typography component={"span"}>
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
          </TabPanel>
        </>
      )}
    </AuthUserContext.Consumer>
  ); // end of return statement
} // end of function

const condition = (authUser) => !!authUser;
const HomePageAuthorized = withAuthorization(condition)(HomePage);
export default withRouter(HomePageAuthorized);
export { initPoints };
