import React from "react";
import styles from "./badges2.module.css";
import ActionData from "../../HomePage/actionData.json";

import Typography from "@material-ui/core/Typography";

var masterBadgesArray = []; // Initalize an array that will contain only the mastered actions
for (const el in ActionData) {
  // Iterate over every action in ActionData & determine if the action has been mastered
  var action = ActionData[el]; // Take the current action
  var stringActionName = JSON.stringify(action.susAction); // variable that has action's name as a string
  var storageName = action.susAction.concat("Mastered"); // variable that adds "Mastered" to end of action title
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
      leafStyling: null,
      flipStatus: null,
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
      active: true,
      activeItemId: null,
      flippedId: -1,
    };
    this.getData = this.getData.bind(this);
  }

  cardClick = (i) => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
      activeItemId: i,
    });
    // this.setState({
    //   activeItemId: i,
    // });
    // if (flippedId === i) {
    //   this.setState({
    //     flippedId: i,
    //   });
    // }
    // console.log(activeItemId);
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
      if (badge.leafStyling == styles.left) {
        badge.flipStatus = styles.flipLeft;
      }
      if (badge.leafStyling == styles.right) {
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
    const { activeItemId } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.fancyBorder}>
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
        </div>

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
            <div key={i}>
              <div className={styles.column}>
                <div
                  className={`${
                    activeItemId === badge.id ? null : `${badge.flipStatus}`
                  } ${badge.leafStyling}`}
                  onClick={() => this.cardClick(badge.id)}
                >
                  {/* <div
                  className={`${
                    this.state.active ? null : `${badge.flipStatus}`
                  } ${badge.leafStyling}`}
                  onClick={() => this.cardClick(i)}
                > */}
                  {/* <div className={badge.leafStyling}> */}
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
                      {badge.toMaster} <br /> Times Completed!
                    </Typography>
                  </div>
                  {/* </div> */}
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
      </div>
    );
  }
}

export default Badges2;
