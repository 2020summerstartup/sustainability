import styles from "./badgeModal.module.css";
import React, { Fragment, useState, useContext, lazy, Suspense } from "react";
import { withRouter } from "react-router";
import ProgressCircle from "../../components/ProgressCircle";

// import FavoriteCard from "./faveCard";
import actionTab from "../../img/actionTab.svg";
import badgeImg from "../../img/badge.svg";
import "./toastify.css";

import CountUp from "react-countup";
import Modal from "react-modal";
import Confetti from "react-confetti";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import {
  updateUserPoint,
  updateDormPoint,
  actionMastered,
  addFav,
  deleteFav,
  updateUserImpact,
} from "../../services/Firebase";

import PropTypes from "prop-types";

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

// Lazy load the fave card
const FavoriteCard = lazy(() => import("./faveCard.js"));
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

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};

// this function is meant to get each action's point value from firestore and then set each action's points in local storage
// should only be called when page first loads, not when points are increment
function assignData(data) {
  // the data parameter is meant to be a firestore document snapshot
  localStorage.setItem("dorm", data.userDorm);
  localStorage.setItem("name", data.name);
  localStorage.setItem("total", data.total);
  // initialize mastered action
  var firestoreMastered = data.masteredActions;
  localStorage.setItem("firestoreMastered", JSON.stringify(firestoreMastered));
  // initialize points
  for (const [key, value] of Object.entries(data.points)) {
    localStorage.setItem(key, value);
  }
  // initialize favorite actions
  const favorites = data.favorites;
  for (const [susAction] of Object.entries(favorites)) {
    var storageName = susAction.concat("Fav");
    localStorage.setItem(storageName, true);
  }
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

// Idk who wrote this or what it does -Katie
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    // flexGrow: 1,
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
  root: {
    minWidth: "280",
    // maxHeight: "168px",
    backgroundColor: theme.palette.divider,
    // height: "100%",
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
  avatar: {
    backgroundColor: "var(--theme)",
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
  card: {
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
      background: "linear-gradient(to top, #f48fb1, rgba(0,0,0,0))",
    },
  },
  card2: {
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
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  appbar: {
    boxShadow: "2px 2px 6px #242424",
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
  buttonModal: {
    marginTop: theme.spacing(2),
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  textTitle: {
    color: "black",
  },
  badgeImg: {
    width: "50%",
    height: "50%",
    margin: "1rem",
  },
  textBody: {
    color: "black",
  },
  buttonClose: {
    marginTop: theme.spacing(2),
  },
  totalPoints: {
    position: "relative",
    top: "0.5rem",
    fontWeight: "bold",
  },
}));

// transition to make modal open by slideing up and close by sliding down
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// JESSICA WAS WORKING HERE AT END OF DAY
// const uploadUserData = (email) => {
//     // Get user's dorm set in local storage
//     console.log(email)
//     getUser(email).get().then(snap => {
//         if (snap.exists) {
//           initImpactPoints(email)
//           assignData(snap.data());
//           function assignData(data) {
//             localStorage.setItem("dorm", data.userDorm);
//             localStorage.setItem('total', data.total);
//           }
//         } else {
//           createUser(email);
//           initPoints(email);
//           initImpactPoints(email)
//           uploadUserTotalPoint(email, total);
//         }
//       },
//       (err) => {
//         console.log(`Encountered error: ${err}`);
//       })
//     };
// uploadUserData(localStorage.getItem('email'))

// Text to display on the homepage
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
  // hopefully will revisit later to get rid of refresh page solution
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
  // const [height, setHeight] = React.useState("");
  const [filter, setFilter] = useState("");
  toast.configure(); // Configure for toast messages later (not actually sure what this does tbh, but it was in
  // the one Amy wrote so I assume it's necessary here too) -Katie
  // const mediaStyles1 = useCoverCardMediaStyles({ bgPosition: "top"});
  const mediaStyles2 = useCoverCardMediaStyles({ bgPosition: "bottom" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/home/${tabNameToIndex[newValue]}`);
  };

  const handleExpandClick = (i) => {
    // WILL MAYBE REVISITED TO HAVE CARDS SAME HEIGHT
    // for (const j in ActionData) {
    //   if (expandedId === i) {
    //     setHeight("168px");
    //     console.log("ID: ", i);
    //     console.log("ID HEIGHT: ", height);
    //   } else {
    //     setHeight("100%");
    //   }
    // }
    // console.log("ID: ", i);
    // console.log("HEIGHT: ", height);
    setExpandedId(expandedId === i ? -1 : i);
    // setHeight("50px")
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  var temp = localStorage.getItem("firestoreMastered");
  var firestoreMastered = [];
  for (const el in ActionData) {
    var action = ActionData[el]; // Take the current action
    var stringActionName = JSON.stringify(action.susAction);
    if (temp) {
      if (temp.includes(stringActionName)) {
        firestoreMastered.push(action.susAction);
      }
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
  // sets the state of userTotal so that user's total point display is correct
  const updateDisplayTotal = (actionPoint) => {
    const newTotal =
      parseInt(localStorage.getItem("total")) + parseInt(actionPoint);
    updateUserTotal(newTotal);
  };

  // Updates all necessary values in firestore and local storage when user completes sus action
  const increment = (action) => {
    // function is what updates UserTotal state so that correct score is displayed!!
    updateDisplayTotal(action.points);

    // allows us to increment the correct values by writing the action & value to local storage
    // add specified number of points to the specific action point count
    localStorage.setItem(
      action.susAction,
      parseInt(localStorage.getItem(action.susAction)) + parseInt(action.points)
    );
    // add specified number of points to the user's total point count
    localStorage.setItem(
      "total",
      parseInt(localStorage.getItem("total")) + parseInt(action.points)
    );

    // updates user's point in firestore
    updateUserPoint(
      authContext.email,
      action.susAction,
      parseInt(action.points)
    ).then(() => {
      // THIS IS WHERE WINDOW REFRESH OCCURS!!
      // window.location.reload(true);
    });

    // add's associated impact points in firestore and local storage
    updateUserImpact(
      authContext.email,
      action.coEmiss,
      action.energy,
      action.water
    );

    // check if action has been completed enough time to be considered "mastered"
    // also sends user a progress notifications if action has not yet been mastered
    checkMastered(action);

    // update dorm's point in firestore
    updateDormPoint(localStorage.getItem("dorm"), parseInt(action.points));
  }; // increment

  //This function checks if (upon increment) the action should be mastered & acts according
  const checkMastered = (action) => {
    // Get the name and info of the stored action that we're working with

    // In case the action hasn't been favorited before
    // NOTE: false is NaN, so here I don't check if the boolean is NaN because it often is. (I wonder if true is NaN too?)
    // if (storedMaster == null) {
    //   console.log('null')
    // }
    const actionTotal = localStorage.getItem(action.susAction);
    if (action.toMaster * action.points > actionTotal) {
      // If action has not been mastered, the button will remain enabled
      // send user a progress alert to tell them how many more points they need to complete the action
      var displayText;
      // display a different message depending on if the user needs to buzz one or several more times to complete
      if (action.toMaster - actionTotal / action.points !== 1) {
        displayText = `You are ${
          action.toMaster - actionTotal / action.points
          } buzzes away from mastering the ${action.title} task!`;
      } else {
        displayText = `You are only 1 buzz away from mastering the ${action.title} task! You got this!`;
      }
      toast.success(displayText, { autoClose: 5000 }); // It's "success" so that the toast is pink
      // possibly want a new sound for this?
      setBadgeModalIsOpen(false);
    } else if (action.toMaster * action.points <= actionTotal) {
      actionMastered(authContext.email, action.susAction);
      // add to firestore list of mastered actions (local storage will ipdate upon page refresh) to reflect
      // that action has been mastered -> will be disabled upon reload
      setBadgeAction(action.title);
      setBadgeActionCount(action.toMaster);
      setBadgeModalIsOpen(true);
      const badgeAudio = new Audio(badge);
      badgeAudio.play();
      firestoreMastered.push(action.susAction);
      localStorage.setItem(
        "firestoreMastered",
        JSON.stringify(firestoreMastered)
      );
    }
  };

  const handleClose = () => {
    setBadgeModalIsOpen(false);
  };

  // Initialize the color of each favorite button
  // This isn't in a const because I can't call the const when I want using html. Could go in a const and then be called with JS.
  var favIconColors = []; // Initalize array of the color for each favIcon
  for (const el in ActionData) {
    // Iterate over every action in ActionData
    var action2 = ActionData[el]; // Take the current action
    var storageName2 = action2.susAction.concat("Fav");
    var storedFav = localStorage.getItem(storageName2) === "true";
    if (storedFav) {
      // If the action is favorited
      favIconColors[el - 1] = "#f48fb1"; // Turn red
    } else {
      favIconColors[el - 1] = "#6c6c6c"; // Otherwise turn gray
    }
  }

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
    if (storedFav) {
      displayText = action.title.concat(" added to favorites");
      favIconColor.style.color = "#f48fb1"; // Turn red
      playSound(likeAudio);
      toast.success(displayText, { autoClose: 5000 }); // It's "success" so that the window is green
      addFav(authContext.email, action.susAction);
    } else {
      displayText = action.title.concat(" removed from favorites");
      favIconColor.style.color = "#6c6c6c"; // Back to grey
      playSound(unlikeAudio);
      toast.warn(displayText, { autoClose: 5000 }); // It's a warning so that the window is yellow
      deleteFav(authContext.email, action.susAction);
    }
    localStorage.setItem(storageName, storedFav); // Save the updated favorite value
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

  // HTML to be displayed
  return (
    <>
      <>
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
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div className={classes.tabText}>
                  <FavoriteIcon className={classes.tabIcon} /> Favorites{" "}
                </div>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <div className="top-container">
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
          {/* Mobile Screens */}
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
          {/* Large Screens */}
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

          <Dialog
            open={badgeModalIsOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* NOTE: dialogContent is styles in module.css, background wouldn't work otherwise */}
            <DialogContent className={styles.dialogContent}>
              {/* RIBBON */}
              <div className={styles.nonSemanticProtector}>
                <h1 className={styles.ribbon}>
                  <strong className={styles.ribbonContent}>
                    Congratulations {localStorage.getItem("name")}!
                  </strong>
                </h1>
              </div>
              {/* <Typography variant="h5" className={classes.textTitle}>
                  Congratulations [user's name]!
                </Typography> */}
              {/* <Typography variant="subtitle" className={classes.textBody}>
                  You just earned a new badge for completing {badgeAction}! This means
                  you have completed this action 20 times. Great job and keep being
                  sustainable!
                </Typography> */}
              <img alt="badge" src={badgeImg} className={classes.badgeImg} />
              {/* MUST ATTRIBUTE AUTHOR */}
              {/* <Typography variant="h5">Congratulations [user's name]!</Typography> */}
              <Typography variant="subtitle1" className={classes.textBody}>
                You just earned a new badge for mastering the {badgeAction}{" "}
                task! This means you have completed the {badgeAction} task{" "}
                {badgeActionCount} times. Great job, and keep being sustainable!
              </Typography>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                autoFocus
                className={classes.buttonClose}
              >
                Got it
              </Button>
            </DialogContent>
          </Dialog>

          {/* NEW MODAL for Check Progress */}
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
              id="alert-dialog-slide-title"
              style={{
                backgroundColor: "var(--theme-secondary)",
                color: "#FFFFFF",
              }}
            >
              {"Check Your Progress!"}
            </DialogTitle>
            <DialogContent>
              <Confetti
                width={1500}
                numberOfPieces={2000}
                recycle={false}
                opacity={0.7}
              // colors={["grey", "white", "var(--theme)", "black", "var(--theme-secondary)"]}
              />
              <DialogContentText id="alert-dialog-slide-description">
                {progressMessage}
              </DialogContentText>
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
        <TabPanel value={value} index={0} className="tab-container">
          {/* Action galaxy card*/}
          <NoSsr>
            <GoogleFontLoader
              fonts={[
                { font: "Spartan", weights: [300] },
                { font: "Montserrat", weights: [200, 400, 700] },
              ]}
            />
          </NoSsr>
          <Card className={classes.card2}>
            <CardMedia
              classes={mediaStyles2}
              image={actionTab}
              style={{ backgroundPosition: "center center" }}
            />
            {/* now we can see the fireworks^ */}
            <Box py={3} px={2} className={classes.content}>
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
            {/* Card for actions */}
            <Grid container justify="center" spacing={2}>
              {/* All actions (this loops using search) */}
              {ActionData.map(
                (action, i) =>
                  action.title.toLowerCase().includes(filter.toLowerCase()) && (
                    <Grid item xs={12} md={6} lg={4} key={i}>
                      <Card className={classes.root}>
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
                          subheader={"Earn ".concat(action.points, " Points!")}
                        />

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
        <TabPanel value={value} index={1} className="tab-container">
          <div>
            <AuthUserContext.Consumer>
              {(authUser) => (
                <>
                  <Suspense
                    fallback={
                      <center>
                        <ProgressCircle />
                      </center>
                    }
                  >
                    <FavoriteCard />
                  </Suspense>

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
                            <Card className={classes.root}>
                              <CardHeader
                                className={classes.cardContent}
                                action={
                                  <IconButton
                                    disabled={firestoreMastered.includes(
                                      action.susAction
                                    )}
                                    onClick={() => confirmIncrement(action)}
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
              )}
            </AuthUserContext.Consumer>
          </div>
        </TabPanel>
      </>
    </>
  ); // end of return statement
} // end of function

const condition = (authUser) => !!authUser;
const HomePageAuthorized = withAuthorization(condition)(HomePage);
export default withRouter(HomePageAuthorized);
export { initPoints, assignData };
