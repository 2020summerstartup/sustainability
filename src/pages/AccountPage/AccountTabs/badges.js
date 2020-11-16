// commented by KR & JM (several people contrubted to file)
import React from "react";
import { useSelector, connect } from 'react-redux';
import styles from "./badges.module.css";
import ActionData from "../../HomePage/actionData.json";
import fansImg from "../../../img/fans.svg";
import "../../../components/GalaxyCards/galaxyCards.css";
// Material UI and galaxy card imports
import Typography from "@material-ui/core/Typography";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
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

var masteredActions = localStorage.getItem("firestoreMastered"); // MasteredActions array contains all mastered actions (stored in LS)
var masterLength; // initalize global variable that is length of masteredActions array
if (
  masteredActions !== null &&
  masteredActions !== "undefined" &&
  masteredActions !== []
) {
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
const badgeSay = (badgeLength, reduxName) => {
  // No mastered actions
  if (badgeLength === 0) {
    theCongrats = (
      <>
        {" "}
        Hi, {reduxName}! Go log more actions to earn some
        badges!
      </>
    );
    theBadge = (
      <>
        I believe in you{" "}
        <span role="img" aria-label="hug">
          🤗
        </span>
      </>
    );
    // One mastered activity
  } else if (badgeLength === 1) {
    theCongrats = <> Congratulations, {reduxName}! </>;
    theBadge = (
      <>
        {" "}
        You've earned {badgeLength} badge! Keep it going.{" "}
        <span role="img" aria-label="celebration">
          🥳
        </span>
      </>
    );
    // two to five mastered actions
  } else if (badgeLength > 1 && badgeLength < 5) {
    theCongrats = <> Congratulations, {reduxName}! </>;
    theBadge = (
      <>
        {" "}
        You've earned {badgeLength} badges! That's awesome.{" "}
        <span role="img" aria-label="heart eyes">
          😍
        </span>
      </>
    );
    // More than 4 mastered actiions
  } else {
    theCongrats = <>OMG, {reduxName}! </>;
    theBadge = (
      <p>
        {" "}
        You've earned {badgeLength} badges! That's how it's done.{" "}
        <span role="img" aria-label="star eyes">
          🤩
        </span>
      </p>
    );
  }
};

// Call function so theCongrats and theBadge can be updated
// badgeSay(masterLength);

var masterBadgesArray = []; // Initalize global variable array that will contain only the mastered actions
// called when user goes to badges tab --> displays the correct, updated badges by adding badge action info to array that is looped through
const getUpdatedBadges = (masteredArray) => {
  masterBadgesArray = [];
  for (const el in ActionData) {
    // Iterate over every action in ActionData & determine if the action has been mastered
    var action = ActionData[el]; // Take the current action
    var stringActionName = JSON.stringify(action.susAction); // variable that has action's name as a string
    var firestoreMastered = JSON.stringify(masteredArray);
    //when user first opens the app --> we are setting a var firestoreMastered equal to the array that firestore holds

    if (
      firestoreMastered != null && // if the array is not empty / if the array exists
      firestoreMastered.includes(stringActionName) // if the array contains the actions --> the action is mastered
    ) {
      // sets attributes for the specific action
      const masteredActionProps = {
        id: action.id,
        title: action.badgeName,
        titleStylingFront: null, // styles for title left or right
        titleStylingBack: null, //styles for backside title left or right
        leafStyling: null, //float left or right
        flipStatus: null, //flip left or right
        toMaster: action.toMaster,
      };
      // adds the necessary attributes to the masterBadgesArray that we will loop through to render the cards later
      masterBadgesArray.push(masteredActionProps);
    }
  }
};

// Galaxy Card for badges
// React.memo keep our app from over rendering when it doesn't need to (like when badge is clicked)
export const BadgesCard = React.memo(function GalaxyCard() {
  // Image is centered and styles are called
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });
  const user = useSelector(state => state.user);
  badgeSay(masterLength, user.name);
  getUpdatedBadges(user.masteredActions);

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
      <Card className="galaxyCard">
        <CardMedia classes={mediaStyles} image={fansImg} />
        <Box py={3} px={2} className="galaxyContent">
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle
              style={{
                color: "white",
                fontWeight: "bold",
                // marginTop: "0.25rem",
              }}
            >
              {theCongrats}
            </InfoSubtitle>
            <InfoTitle>{theBadge}</InfoTitle>
            <InfoCaption
              style={{
                color: "white",
                fontWeight: "bold",
                // marginTop: "0.5rem",
              }}
            >
              {" "}
              Click on the badges for another surprise!{" "}
              <span role="img" aria-label="leaf">
                🍃
              </span>
            </InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});

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

  // function to get different styling for [left & right && front and back] for title, leaf position
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
    getUpdatedBadges(this.props.reduxMastered); // get updated badges each time user goes to badges tab
    this.getStyling(); // get styling for left/right badges each time user goes to badges tab
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
                {/* only flip the leaf with id of badge that was clicked */}
                <div
                  className={`${
                    badge.id === selectedBadgeId && selectedBadgeState
                      ? `${badge.flipStatus}`
                      : null
                  } ${badge.leafStyling}`}
                  onClick={() => this.cardClick(badge.id)}
                >
                  {/* FRONT of BADGE */}
                  <div className={styles.leafFront}>
                    <Typography
                      variant="h6"
                      className={badge.titleStylingFront}
                    >
                      <br />
                      {badge.title}
                      <br />
                      &nbsp;
                    </Typography>
                  </div>

                  {/* BACK of BADGE */}
                  <div className={styles.leafBack}>
                    <Typography variant="h6" className={badge.titleStylingBack}>
                      <center>
                        Completed
                        <br />
                        {badge.toMaster}
                        <br />
                        Times!
                      </center>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <Typography variant="h5">
              You haven't earned any badges yet. :(
            </Typography>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxMastered: state.user.masteredActions
});

export default connect(mapStateToProps)(Badges);
