import React from "react";
import styles from "./badges2.module.css";
import ActionData from "../../HomePage/actionData.json";
import fans from "../../../img/fans.svg";

import SignOutButtom from "../../../components/SignOut";
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

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    maxWidth: "60rem",
    minHeight: "15rem",
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
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

// stores string for badge
var theBadge;
var theCongrats;

var arrayMaster = JSON.parse(localStorage.getItem("firestoreMastered"));
var masterLength = arrayMaster.length;

const badgeSay = () => {
  if (masterLength === 0) {
    theCongrats = <p> Hi, {localStorage.getItem("name")}! Go log more actions to earn some badges!</p>
    theBadge = <p>I believe in you 🤗 </p>;
  } else if (masterLength > 0 && masterLength < 5) {
    theCongrats = <p> Congratulations {localStorage.getItem("name")}! </p>
    theBadge = <p> You've earned {masterLength} badges! Keep it going 🥳 </p>
  } else {
    theCongrats = <p>Omg {localStorage.getItem("name")}! </p>
    theBadge = <p> You've earned {masterLength} badges! That's awesome 😍</p>
  }
};

export const BadgesCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });
  const classes = useStyles();
  badgeSay();

  return (
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
        <CardMedia classes={mediaStyles} image={fans} />
        <Box py={3} px={2} className={classes.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle></InfoSubtitle>
            <InfoTitle>
              {theCongrats} {theBadge}
            </InfoTitle>
            <InfoCaption>
              {" "}
              Click on the badges for another surprise! 🍃
            </InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});

var masterBadgesArray = []; // Initalize an array that will contain only the mastered actions
for (const el in ActionData) {
  // Iterate over every action in ActionData & determine if the action has been mastered
  var action = ActionData[el]; // Take the current action
  var stringActionName = JSON.stringify(action.susAction); // variable that has action's name as a string
  var firestoreMastered = localStorage.getItem("firestoreMastered"); //firestoreMastered is imported from firestore and set in local storage when user
  // first opens the app --> we are setting a var firestoreMastered equal to the array that firestore holds

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

class Badges2 extends React.Component {
  constructor() {
    super();
    this.state = {
      badges: [],
      selectedBadgeId: null, //id of the badge that user clicks on
      selectedBadgeState: false, //state of the badge that use clicks on
    };
    this.getData = this.getData.bind(this);
  }

  // function for when user clicks on card with specific id
  cardClick = (id) => {
    if (id === this.state.selectedBadgeId) {
      this.setState({
        selectedBadgeState: !this.state.selectedBadgeState, //toggle to change state to what it wasn't before
      });
    } else {
      this.setState({
        selectedBadgeId: id,
        selectedBadgeState: true,
      });
    }
  };

  getData() {
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
        badge.flipStatus = styles.flipLeft;
      }
      if (badge.leafStyling === styles.right) {
        badge.flipStatus = styles.flipRight;
      }
    });

    this.setState({
      badges: masterBadgesArray,
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { selectedBadgeId, selectedBadgeState } = this.state;

    return (
      <>
        <BadgesCard />
        <div className={styles.root}>
          {/* <div className={styles.fancyBorder}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              justify: "center",
              textShadow: "2px 2px 3px black",
            }}
          >
            Congratulations {localStorage.getItem("name")}! You have earned
            &nbsp;
            {masterBadgesArray.length} badges!
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white", textShadow: "2px 2px 3px black" }}
          >
            Hover over the badges for another surprise!
          </Typography>
        </div> */}

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
                    // if badge id is the selected one and the badge state is true, then we flip the badge
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
                      <Typography
                        variant="h6"
                        className={badge.titleStylingBack}
                      >
                        {badge.toMaster} <br /> Times Completed!
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
          <SignOutButtom />
        </div>
      </>
    );
  }
}

export default Badges2;
