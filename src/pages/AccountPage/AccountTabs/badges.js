// commented by KR & JM (several people contrubted to file)
import React from "react";
import styles from "./badges.module.css";
import ActionData from "../../HomePage/actionData.json";
import fansImg from "../../../img/fans.svg";
// Material UI and galaxy card imports
import Typography from "@material-ui/core/Typography";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoSubtitle,
  InfoCaption,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

// Styles for Badge Galaxy Card
const useStyles = makeStyles((theme) => ({
  galaxyCard: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    // Important for fitting card on the screen
    maxWidth: "60rem",
    minHeight: "15rem",
    // Everything above "small" screen
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60rem",
      minHeight: "20rem",
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 1,
      borderRadius: "black",
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  galaxyContent: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

var masteredActions = localStorage.getItem("firestoreMastered"); // MasteredActions array contains all mastered actions (stored in LS)
var masterLength; // initalize global variable that is length of masteredActions array 
if (masteredActions !== null && masteredActions !== "undefined" && masteredActions !== []) {
  // If masteredActions is defined, then it has a specific length 
  masterLength = JSON.parse(masteredActions).length;
} else {
  // If masteredAction is null, then there are zero mastered actions
  masterLength = 0;
}

// Stores messages for Galaxy card
var theBadge;
var theCongrats;

// Determines message depending on number of badges the user has for Galaxy Card
const badgeSay = () => {
  // No mastered actions
  if (masterLength === 0) {
    theCongrats = (
      <>
        {" "}
        Hi, {localStorage.getItem("name")}! Go log more actions to earn some
        badges!
      </>
    );
    theBadge = (
      <p>
        I believe in you{" "}
        <span role="img" aria-label="hug">
          🤗
        </span>
      </p>
    );
    // One mastered activity
  } else if (masterLength === 1) {
    theCongrats = <> Congratulations, {localStorage.getItem("name")}! </>;
    theBadge = (
      <p>
        {" "}
        You've earned {masterLength} badge! Keep it going.{" "}
        <span role="img" aria-label="celebration">
          🥳
        </span>
      </p>
    );
    // two to five mastered actions
  } else if (masterLength > 1 && masterLength < 5) {
    theCongrats = <> Congratulations, {localStorage.getItem("name")}! </>;
    theBadge = (
      <p>
        {" "}
        You've earned {masterLength} badges! That's awesome.{" "}
        <span role="img" aria-label="heart eyes">
          😍
        </span>
      </p>
    );
    // More than 4 mastered actiions
  } else {
    theCongrats = <>OMG, {localStorage.getItem("name")}! </>;
    theBadge = (
      <p>
        {" "}
        You've earned {masterLength} badges! That's how it's done.{" "}
        <span role="img" aria-label="star eyes">
          🤩
        </span>
      </p>
    );
  }
};

// Call function so theCongrats and theBadge can be updated
badgeSay();

var masterBadgesArray = []; // Initalize an array that will contain only the mastered actions
for (const el in ActionData) { // Iterate over every action in ActionData & determine if the action has been mastered
  var action = ActionData[el]; // Take the current action
  var stringActionName = JSON.stringify(action.susAction); // variable that has action's name as a string
  var firestoreMastered = localStorage.getItem("firestoreMastered"); //firestoreMastered is imported from firestore and set in local storage 
  //when user first opens the app --> we are setting a var firestoreMastered equal to the array that firestore holds 

  if (
    firestoreMastered != null && // if the array is not empty / if the array exists
    firestoreMastered.includes(stringActionName) // if the array contains the actions --> the action is mastered
  ) {
    // sets attributes for the specific action
    const masteredActionProps = {
      id: action.id,
      title: action.badgeName,
      titleStylingFront: null,
      titleStylingBack: null,
      leafStyling: null, //float left or right
      flipStatus: null, //show back or front
      toMaster: action.toMaster,
    };
    // adds the necessary attributes to the masterBadgesArray that we will loop through to render the cards later
    masterBadgesArray.push(masteredActionProps);
  }
}
// Displays text for back of leaf depending on how many actions have been mastered
var backText;
const leafBackSay = () => {
  if (masterLength === 1) {
    backText = (
      <center>
        Completed <br /> 1 <br /> Time!
      </center>
    );
  } else {
    backText = (
      <center>
        Completed <br /> {masterBadgesArray.length} <br /> Times!
      </center>
    );
  }
};
// Need to call function for it to run
leafBackSay();

// Galaxy Card for badges
export const BadgesCard = function GalaxyCard() {
  // Image is centered and styles are called
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });
  const classes = useStyles();

  return (
    <>
      {/* Badges Galaxy Card */}
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={classes.galaxyCard}>
        <CardMedia classes={mediaStyles} image={fansImg} />
        <Box py={3} px={2} className={classes.galaxyContent}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
              {theCongrats}
            </InfoSubtitle>
            <InfoTitle>{theBadge}</InfoTitle>
            <InfoCaption style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Click on the badges for another surprise! 🍃
            </InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
};
// Main Component - displays galaxy card and leaf badges for mastered actions
class Badges extends React.Component {
  constructor() {
    super();
    this.state = {
      badges: [],
      selectedBadgeId: null, // id of the badge that user clicks on
      selectedBadgeState: false, // state of the badge that use clicks on
    };
    this.getStyling = this.getStyling.bind(this);
  }

  // function for when user clicks on card with specific id
  cardClick = (id) => {
    if (id === this.state.selectedBadgeId) {
      // if the id is the selected one
      this.setState({
        selectedBadgeState: !this.state.selectedBadgeState, // toggle to change state to what it wasn't before
      });
    } else {
      this.setState({
        selectedBadgeId: id,
        selectedBadgeState: true,
      });
    }
  };

  getStyling() {
    // loop through our array of mastered badges and determines if they need to have LHS or RHS side properties
    masterBadgesArray.forEach((badge, id) => {
      if (id % 2 === 0) {
        // if the badge is even, give it LHS properties
        badge.titleStylingFront = styles.titleLeftFront;
        badge.titleStylingBack = styles.titleLeftBack;
        badge.leafStyling = styles.left;
      } else {
        // if the badge is odd, give it RHS properties
        badge.titleStylingFront = styles.titleRightFront;
        badge.titleStylingBack = styles.titleRightBack;
        badge.leafStyling = styles.right;
      }
      if (badge.leafStyling === styles.left) {
        // if left badge, give it flip left properties
        badge.flipStatus = styles.flipLeft;
      }
      if (badge.leafStyling === styles.right) {
        // if left badge, give it flip right properties
        badge.flipStatus = styles.flipRight;
      }
    });

    this.setState({
      badges: masterBadgesArray,
    });
  }

  componentDidMount() {
    this.getStyling();
  }

  render() {
    const { selectedBadgeId, selectedBadgeState } = this.state;

    return (
      <>
        {/* Badges Galaxy Card from above */}
        <BadgesCard />

        {/* ANIMATED FALLING LEAVES */}
        <div className={styles.leaves}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* MAPPING THROUGH EACH MASTERED BADGE */}
        {this.state.badges ? (
          this.state.badges.map((badge, i) => (
            <div key={badge.id}>
              <div className={styles.column}>
                <div
                  className={`${
                    badge.id === selectedBadgeId && selectedBadgeState
                      ? `${badge.flipStatus}`
                      : null
                  } ${badge.leafStyling}`}
                  onClick={() => this.cardClick(badge.id)}
                >
                  <div className={styles.leafFront}>
                    <Typography
                      variant="h6"
                      className={badge.titleStylingFront}
                    >
                      {badge.title}
                    </Typography>
                  </div>
                  <div className={styles.leafBack}>
                    <Typography variant="h6" className={badge.titleStylingBack}>
                      {backText}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <Typography variant="h5">
              You haven't earned any badges yet :(
            </Typography>
          </div>
        )}
      </>
    );
  }
}

export default Badges;
