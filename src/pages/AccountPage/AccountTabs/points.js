import React, { lazy, Suspense } from "react";
import { connect } from 'react-redux';
import ProgressCircle from "../../../components/ProgressCircle";
import points from "../../../img/points.svg";
import { AuthUserContext } from "../../../services/Session";
import "../../../components/GalaxyCards/galaxyCards.css";

// Import Galaxy Card Styles and Material UI
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
import { example } from '../../../redux/store/actions/test';
const TotalBuzz = lazy(() => import("./totalBuzz"));
const EnvImpactCards = lazy(() => import("./envImpactCards"));

// Encouraging message on bottom of card
var thePoints;

const pointsDisplay = () => {
  if (parseInt(localStorage.getItem("total")) === 0) {
    thePoints = " Go to the home page and log points!";
  } else if (parseInt(localStorage.getItem("total")) < 400) {
    thePoints = " You're amazing! Keep it up!";
  } else {
    thePoints = " You're a superstar 🤩 ";
  }
};

// Main compoenent - Displays the number of points user has
export const TotalPointsCard = function GalaxyCard(props) {
  // Image's top portion is prioritized to display
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });

  // For message created with thePoints
  pointsDisplay();


  return (
    <>
      {/* Only authorized users cna view points */}
      <AuthUserContext.Consumer>
        {(authUser) => (
          <>
            {/* Dorm Galaxy Card */}
            <NoSsr>
              <GoogleFontLoader
                fonts={[
                  { font: "Spartan", weights: [300] },
                  { font: "Montserrat", weights: [200, 400, 700] },
                ]}
              />
            </NoSsr>
            <Card className="galaxyCard">
              <CardMedia classes={mediaStyles} image={points} />
              <Box py={3} px={2} className="galaxyContent">
                <Info useStyles={useGalaxyInfoStyles}>
                  <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
                    You have earned
                  </InfoSubtitle>
                  <InfoTitle> {localStorage.getItem("total")} Points</InfoTitle>
                  <InfoCaption style={{ color: "white", fontWeight: "bold" }}>
                    {thePoints}{" "}
                  </InfoCaption>
                </Info>
              </Box>
            </Card>
            {/* Displays number of actions and overall impact */}
            <Suspense
              fallback={
                <div className="base-container">
                  <ProgressCircle />
                </div>
              }
            >
              <TotalBuzz />
              <EnvImpactCards />
            </Suspense>
          </>
        )}
      </AuthUserContext.Consumer>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    testing: state.test.example
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => dispatch(example(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalPointsCard);
